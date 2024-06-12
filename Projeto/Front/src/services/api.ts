import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3001", // Note que estamos usando "http" em vez de "https"
  headers: {
    "Content-Type": "application/json",
  },
  // Configuração adicional para não usar SSL
  httpsAgent: false, // Desabilita o uso de SSL
});

export default api;
