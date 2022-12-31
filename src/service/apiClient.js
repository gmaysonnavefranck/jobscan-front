import axios from "axios";

export const apiClient = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost/api/',
  headers: {
    Accept: "application/json",
    "content-type": "application/json"
  }
})
