import axios from "axios";

export const publicApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
