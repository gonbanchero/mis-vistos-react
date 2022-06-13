const INITIAL_STATE = {
	views: [],
};

const VIEWED_MOVIE = 'VIEWED_MOVIE';

export const viewsReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case VIEWED_MOVIE:
			return {
				...state,
				views: [...state.views, payload],
			};
		default:
			return state;
	}
};

export const viewedMovie = (movie, score) => (dispatch) => {
	dispatch({
		type: VIEWED_MOVIE,
		payload: { ...movie, puntaje: score },
	});
};
