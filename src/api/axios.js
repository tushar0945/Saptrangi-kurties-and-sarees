// // // import axios from "axios";
// // // import { AuthService } from "../services/authService";

// // // // console.log("ENV URL 👉", import.meta.env.VITE_BACKEND_URL);

// // // const api = axios.create({
// // //   baseURL: import.meta.env.VITE_BACKEND_URL,
// // //   headers: {
// // //     "Content-Type": "application/json",
// // //   },
// // //   withCredentials: true, // 🔥 REQUIRED for refresh token cookie
// // // });

// // // // 🔐 Attach access token to every request
// // // api.interceptors.request.use(
// // //   (config) => {
// // //     const token = AuthService.getAccessToken();

// // //     if (token) {
// // //       config.headers.Authorization = `Bearer ${token}`;
// // //     }

// // //     return config;
// // //   },
// // //   (error) => Promise.reject(error)
// // // );

// // // // 🔄 Auto refresh on 401
// // // api.interceptors.response.use(
// // //   (response) => response,
// // //   async (error) => {
// // //     const originalRequest = error.config;

// // //     // Prevent infinite loop
// // //     if (error.response?.status === 401 && !originalRequest._retry) {
// // //       originalRequest._retry = true;

// // //       try {
// // //         const { accessToken } = await AuthService.refresh();

// // //         originalRequest.headers.Authorization = `Bearer ${accessToken}`;

// // //         return api(originalRequest); // retry original call
// // //       } catch (refreshError) {
// // //         await AuthService.logout();
// // //         return Promise.reject(refreshError);
// // //       }
// // //     }

// // //     return Promise.reject(error);
// // //   }
// // // );

// // // export default api;

// // import axios from "axios";
// // import { AuthService } from "../services/authService";

// // const api = axios.create({
// //   baseURL: import.meta.env.VITE_BACKEND_URL,
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// //   withCredentials: true, // required for refresh cookie
// // });

// // // 🔐 Attach access token to every request
// // api.interceptors.request.use(
// //   (config) => {
// //     const token = AuthService.getAccessToken();

// //     if (token) {
// //       config.headers.Authorization = `Bearer ${token}`;
// //     }

// //     return config;
// //   },
// //   (error) => Promise.reject(error)
// // );

// // // 🔄 SAFE auto-refresh interceptor
// // api.interceptors.response.use(
// //   (response) => response,
// //   async (error) => {
// //     const originalRequest = error.config;

// //     // Retry ONLY once on 401
// //     if (error.response?.status === 401 && !originalRequest._retry) {
// //       originalRequest._retry = true;

// //       try {
// //         const { accessToken } = await AuthService.refresh();

// //         originalRequest.headers.Authorization = `Bearer ${accessToken}`;

// //         return api(originalRequest); // retry request
// //       } catch (refreshError) {
// //         // ❌ DO NOT LOGOUT HERE
// //         console.warn("Refresh failed in interceptor. Keeping stored session.");

// //         return Promise.reject(error);
// //       }
// //     }

// //     return Promise.reject(error);
// //   }
// // );

// // export default api;

// import axios from "axios";
// import { AuthService } from "../services/authService";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true, // ✅ required for refresh-token cookie
// });

// // ==============================
// // 🔐 REQUEST INTERCEPTOR
// // Attach access token to every request
// // ==============================
// api.interceptors.request.use(
//   (config) => {
//     const token = AuthService.getAccessToken();

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // ==============================
// // 🔄 RESPONSE INTERCEPTOR
// // Safe auto-refresh on 401 (NO logout)
// // ==============================
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // ❌ If no response (network error), just reject
//     if (!error.response) {
//       return Promise.reject(error);
//     }

//     // 🔁 Retry ONLY ONCE for 401
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const { accessToken } = await AuthService.refresh();

//         // 🔐 Update header with new token
//         originalRequest.headers.Authorization = `Bearer ${accessToken}`;

//         // 🔁 Retry original request
//         return api(originalRequest);
//       } catch (refreshError) {
//         // 🚫 IMPORTANT: DO NOT LOGOUT HERE
//         console.warn(
//           "🔁 Token refresh failed. Continuing with stored session."
//         );
//         return Promise.reject(error);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;

import axios from "axios";
import { AuthService } from "../services/authService";

let isRefreshing = false;

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // ✅ required for refresh cookie
});

/* ==============================
   🔐 REQUEST INTERCEPTOR
   ============================== */
api.interceptors.request.use(
  (config) => {
    const token = AuthService.getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ==============================
   🔄 RESPONSE INTERCEPTOR
   SAFE MODE (NO STORAGE MUTATION)
   ============================== */
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // ❌ Network error
    if (!error.response) {
      return Promise.reject(error);
    }

    // ❌ If refresh endpoint itself failed → STOP
    if (originalRequest?.url?.includes("/auth/auth/refresh")) {
      console.warn("❌ Refresh endpoint failed. Skipping retry.");
      return Promise.reject(error);
    }

    // 🔁 Retry only once for 401
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      !isRefreshing
    ) {
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { accessToken } = await AuthService.refresh();

        isRefreshing = false;

        // 🔐 Use new token ONLY in memory
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return api(originalRequest);
      } catch (err) {
        isRefreshing = false;

        console.warn(
          "🔁 Refresh failed. Keeping existing localStorage session."
        );

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
