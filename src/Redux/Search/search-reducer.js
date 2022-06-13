import axios from 'axios';

const INITIAL_STATE = {
	search: [],
};

const SEARCH_MOVIE = 'SEARCH_MOVIE';

export const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SEARCH_MOVIE:
			return {
				...state,
				search: payload,
			};
		default:
			return state;
	}
};

export const searchForMovie = (movie) => async (dispatch) => {
	try {
		const res = await axios.get(
			`https://api.themoviedb.org/3/search/multi?api_key=3907f1e02c5af5a6eb040f19d19e5a97&language=es&query=${movie}&page=1&include_adult=false`
		);
		const data = res.data.results;
		// console.log(data);
		const withImages = data.filter((movie) => movie.backdrop_path !== null);
		dispatch({ type: SEARCH_MOVIE, payload: { search: withImages } });
	} catch (error) {
		alert(error);
	}
};
