import axios from "axios";
const baseUrl =
  "https://e06a-2400-adc5-437-1000-db4-f25e-d29c-f847.in.ngrok.io";
const token = localStorage.getItem("token");
const instance = axios.create({
  baseURL: baseUrl,
  headers: { authorization: token },
});

export default instance;
