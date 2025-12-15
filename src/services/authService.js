// // // import api from "../api/axios";
// // // import { publicApi } from "../api/publicApi";

// // // const STORAGE_KEY = "auth_session";

// // // export const AuthService = {
// // //   setAuthSession({ user, accessToken }) {
// // //     localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, accessToken }));
// // //   },

// // //   getAuthSession() {
// // //     const session = localStorage.getItem(STORAGE_KEY);
// // //     return session ? JSON.parse(session) : null;
// // //   },

// // //   getAccessToken() {
// // //     return this.getAuthSession()?.accessToken || null;
// // //   },

// // //   getUser() {
// // //     return this.getAuthSession()?.user || null;
// // //   },

// // //   isLoggedIn() {
// // //     const session = this.getAuthSession();
// // //     return !!(session?.accessToken && session?.user);
// // //   },

// // //   clearSession() {
// // //     localStorage.removeItem(STORAGE_KEY);
// // //   },

// // //   async refresh() {
// // //     try {
// // //       const res = await publicApi.post(
// // //         "auth/auth/refresh",
// // //         {},
// // //         { withCredentials: true }
// // //       );

// // //       const { accessToken, user } = res.data;

// // //       this.setAuthSession({ user, accessToken });

// // //       return { accessToken, user };
// // //     } catch (error) {
// // //       this.clearSession();
// // //       throw error;
// // //     }
// // //   },

// // //   async logout() {
// // //     try {
// // //       await api.post("/auth/logout", {}, { withCredentials: true });
// // //     } finally {
// // //       this.clearSession();
// // //     }
// // //   },
// // // };

// // import api from "../api/axios";
// // import { publicApi } from "../api/publicApi";

// // const STORAGE_KEY = "auth_session";

// // export const AuthService = {
// //   setAuthSession({ user, accessToken }) {
// //     localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, accessToken }));
// //   },

// //   getAuthSession() {
// //     const session = localStorage.getItem(STORAGE_KEY);
// //     return session ? JSON.parse(session) : null;
// //   },

// //   getAccessToken() {
// //     return this.getAuthSession()?.accessToken || null;
// //   },

// //   getUser() {
// //     return this.getAuthSession()?.user || null;
// //   },

// //   isLoggedIn() {
// //     const session = this.getAuthSession();
// //     return !!(session?.accessToken && session?.user);
// //   },

// //   clearSession() {
// //     localStorage.removeItem(STORAGE_KEY);
// //   },

// //   // 🔄 SAFE REFRESH (DO NOT CLEAR STORAGE HERE)
// //   async refresh() {
// //     const res = await publicApi.post(
// //       "auth/auth/refresh",
// //       {},
// //       { withCredentials: true }
// //     );
// //     console.log("refresh response", res);
// //     const { accessToken, user } = res.data;

// //     this.setAuthSession({ user, accessToken });

// //     return { accessToken, user };
// //   },

// //   // 🚪 HARD LOGOUT ONLY
// //   async logout() {
// //     try {
// //       await api.post("/auth/logout", {}, { withCredentials: true });
// //     } finally {
// //       this.clearSession();
// //     }
// //   },
// // };

// import api from "../api/axios";
// import { publicApi } from "../api/publicApi";

// const STORAGE_KEY = "auth_session";

// export const AuthService = {
//   // 💾 Save auth session
//   setAuthSession({ user, accessToken }) {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, accessToken }));
//   },

//   // 📦 Get session
//   getAuthSession() {
//     const session = localStorage.getItem(STORAGE_KEY);
//     return session ? JSON.parse(session) : null;
//   },

//   // 🔑 Get token
//   getAccessToken() {
//     return this.getAuthSession()?.accessToken || null;
//   },

//   // 👤 Get user
//   getUser() {
//     console.log(this.getAuthSession()?.user);
//     return this.getAuthSession()?.user || null;
//   },

//   // ✅ Logged in?
//   isLoggedIn() {
//     const session = this.getAuthSession();
//     return !!(session?.accessToken && session?.user);
//   },

//   // 🧹 Clear storage
//   clearSession() {
//     localStorage.removeItem(STORAGE_KEY);
//   },

//   // 🔄 SAFE refresh (never clears storage)
//   async refresh() {
//     const res = await api.post(
//       "auth/auth/refresh/",
//       {},
//       { withCredentials: true }
//     );

//     const { accessToken, user } = res.data;

//     this.setAuthSession({ user, accessToken });

//     return { accessToken, user };
//   },

//   // 🚪 Logout (ONLY explicit logout)
//   async logout() {
//     this.clearSession();
//   },
// };

// src/services/authService.js
import api from "../api/axios";

const STORAGE_KEY = "auth_session";

export const AuthService = {
  // =========================
  // SAVE SESSION
  // =========================
  setAuthSession({ user, accessToken }) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, accessToken }));
  },

  // =========================
  // GET SESSION
  // =========================
  getAuthSession() {
    const session = localStorage.getItem(STORAGE_KEY);
    return session ? JSON.parse(session) : null;
  },

  // =========================
  // GET ACCESS TOKEN
  // =========================
  getAccessToken() {
    return this.getAuthSession()?.accessToken || null;
  },

  // =========================
  // GET USER
  // =========================
  getUser() {
    return this.getAuthSession()?.user || null;
  },

  // =========================
  // UPDATE USER (AFTER PROFILE SAVE)
  // =========================
  updateLocalUser(updatedUser) {
    const session = this.getAuthSession();
    if (!session) return;

    this.setAuthSession({
      user: updatedUser,
      accessToken: session.accessToken,
    });
  },

  // =========================
  // CHECK LOGIN
  // =========================
  isLoggedIn() {
    const session = this.getAuthSession();
    return Boolean(session?.accessToken && session?.user);
  },

  // =========================
  // REFRESH TOKEN (SAFE)
  // =========================
  async refresh() {
    const res = await api.post("/auth/refresh/", {}, { withCredentials: true });

    const { accessToken, user } = res.data;

    this.setAuthSession({ user, accessToken });
    return { user, accessToken };
  },

  // =========================
  // LOGOUT (EXPLICIT ONLY)
  // =========================
  logout() {
    localStorage.removeItem(STORAGE_KEY);
  },
};
