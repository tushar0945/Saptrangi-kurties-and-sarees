// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://your-backend-api.com", // replace with actual URL
// });

// // Add token to every request
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://saptrangi-backend.onrender.com", // your backend base URL
  timeout: 10000, // optional (10 sec)
});

export default api;
