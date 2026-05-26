import axios from "axios";

const API = axios.create({

  baseURL:
    "https://cms-3tty.onrender.com/api",

});

export default API;