export const SEARCH_MOVIE = 'SEARCH_MOVIE';

export const searchMovie = (item) => ({
	type: SEARCH_MOVIE,
	payload: item,
});
