import axios from "axios";
const baseUrl = "https://cf5b-2400-adc5-437-1000-cd28-9dc-a2bd-87b.ap.ngrok.io";
const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
