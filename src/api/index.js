import axios from "axios";

const BASE_URL = "http://13.232.48.3/api";
const baseInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseInstance;
