import axios from "axios";

const API_KEY = "38a0f840bcdd9b076080321a8e9000f0";

const apiTMDB = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
});

const filterMovies = async (url) => {
	apiTMDB.get(url).then((res) => res.data);
};

// export default {
// 	getKidList: async () => {
// 		var kid = await filterMovies(
// 			`discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&certification_country=BR&certification=L&certification.lte=L`
// 		);
// 		return [kid];
// 	},
// 	getAdulList: async () => {
// 		var adult = await filterMovies(
// 			`discover/movie?api_key=${API_KEY}&language=pt-BR-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
// 		);
// 		return [adult];
// 	},
// };
