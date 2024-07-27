import axios, { AxiosInstance } from "axios";

export const instanse: AxiosInstance = axios.create({
  baseURL: "https://api-dev.mbgstore.uz/ap1/v1/",
});
