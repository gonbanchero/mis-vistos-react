import axios from 'axios';
import { searchMovie } from './searchSlice';

export const searchForMovie = (movie) => async (dispatch) => {
	try {
		const res = await axios.get(
			`https://api.themoviedb.org/3/search/multi?api_key=3907f1e02c5af5a6eb040f19d19e5a97&language=es&query=${movie}&page=1&include_adult=false`
		);
		const data = res.data.results;
		// console.log(data);
		const withImages = data.filter((movie) => movie.backdrop_path);
		console.log(withImages);
		dispatch(searchMovie(withImages));
	} catch (error) {
		alert(error);
	}
};
