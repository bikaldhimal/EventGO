import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5051/api",
  // credentials: true,
});

export default API;
