import axios from "axios";

const API_KEY = "38a0f840bcdd9b076080321a8e9000f0";

const apiTMDB = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
});

export { API_KEY, apiTMDB };
