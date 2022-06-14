const INITIAL_STATE = {
	views: [],
};

const VIEWED_MOVIE = 'VIEWED_MOVIE';

export const viewsReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case VIEWED_MOVIE:
			return {
				...state,
				views: handleViewedMovie(state.views, payload),
			};
		default:
			return state;
	}
};

export const viewedMovie = (movieToAdd, scoretoAdd) => (dispatch) => {
	dispatch({
		type: VIEWED_MOVIE,
		payload: { ...movieToAdd, puntaje: scoretoAdd },
	});
};

const handleViewedMovie = (state, payload) => {
	console.log(state, payload);
	const existingViewedMovie = state.find(
		(viewed) => viewed.id === payload.id
	);

	if (existingViewedMovie) {
		return state.map((movie) => {
			return movie.id === payload.id
				? { ...movie, puntaje: payload.puntaje }
				: movie;
		});
	}

	return [...state, { ...payload, cantidad: payload.puntaje }];
};
