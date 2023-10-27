import axios from "axios";

const url = "https://real-estate-x6an.onrender.com/";

let baseUrl = axios.create({
  baseURL: url,
});

export default baseUrl;
