import axios from "axios";

const API = axios.create({

  baseURL:
    "https://cms-work.onrender.com/api",

});

export default API;