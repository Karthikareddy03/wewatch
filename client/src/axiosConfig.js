// axiosConfig.js
import axios from "axios";
import { getToken } from "@clerk/clerk-react";

axios.interceptors.request.use(
  async (config) => {
    const token = await getToken({ template: "dev-jwt" });
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
