import axios from "axios";

const BASE_URL = "http://localhost:7777";
const baseInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseInstance;
