import axios from "axios";

export const gptApi = axios.create({
  baseURL: "http://localhost:8080",
});

export const openStreetApi = axios.create({
  baseURL: "https://nominatim.openstreetmap.org/search?format=json&q=$",
});
