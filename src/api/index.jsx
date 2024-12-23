import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "x-rapidapi-key": "ce411ca7a4msh233f6bb3e85d082p1dcbe3jsn6b03f3dd1383",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});

export default api;
