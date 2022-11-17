import axios from "axios";

const api = axios.create({
  baseURL: "https://5dfd-2804-29b8-5006-5bb6-42e4-3d9e-c65e-a653.ngrok.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
