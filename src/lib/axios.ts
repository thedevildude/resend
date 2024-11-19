import axios from "axios";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";
import { API_URL } from "@/constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    throw error;
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
    // If you want to handle success response further, you can add additional logic here
  },
  (error: AxiosError) => {
    throw error;
  }
);

export default axiosInstance;
