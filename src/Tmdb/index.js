import axios from "axios";

const API_KEY = "38a0f840bcdd9b076080321a8e9000f0";

const apiTMDB = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
});

const filterMovies = async (url) => {
	apiTMDB.get(url).then((res) => res.data);
};
const filterKid = () => {
	axios
		.get(
			`discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&certification_country=BR&certification=L&certification.lte=L`
		)
		.then((res) => res.data);
};
const filterAdult = () => {
	axios
		.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=38a0f840bcdd9b076080321a8e9000f0&sort_by=popularity.desc&certification_country=BR`
		)
		.then((res) => res.data);
};

export default {
	getKid: {
		items: filterKid(),
	},
	getAdult: {
		items: filterAdult(),
	},
};

export { API_KEY };
