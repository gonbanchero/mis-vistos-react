import axios from 'axios';

export const searchForMovie = async (previousResult, movie) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/multi?api_key=3907f1e02c5af5a6eb040f19d19e5a97&language=es&query=${movie}&page=1&include_adult=false`
	)
		.then((response) => response.json())
		.then((data) => {
			return data.results;
		});

	// const res = await axios
	// 	.get(
	// 		`https://api.themoviedb.org/3/search/multi?api_key=3907f1e02c5af5a6eb040f19d19e5a97&language=es&query=${movie}&page=1&include_adult=false`
	// 	)
	// 	.then((res) => {
	// 		return res.data.results;
	// 	});

	const withImages = res.filter((movie) => movie.backdrop_path !== null);

	console.log(withImages);
	return withImages;
};
