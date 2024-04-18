import axios from "axios";
import { getCookies } from "@utils/cookie";
export const authApi = axios.create({
  baseURL: import.meta.env.VITE_ZOO_API,
});

export const zooApi = axios.create({
  baseURL: import.meta.env.VITE_ZOO_API,
  headers: { Authorization: `Bearer ${getCookies()}` },
});
