import { viewsReducer } from '../../store/views';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

export const viewedMovie = (movieToAdd, scoreToAdd) => (dispatch) => {
	dispatch(viewsReducer({ ...movieToAdd, puntaje: scoreToAdd }));
};

export const handleViewedMovie = (state, payload) => {
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

	return [...state, { ...payload, puntaje: payload.puntaje }];
};

export const startAddingMovie = (movieAdded, score) => {
	console.log(movieAdded, score);
	return async (dispatch, getState) => {
		console.log('agregamos la movie ameo', getState());

		const { uid } = getState().auth;

		const newViewedMovie = doc(
			collection(FirebaseDB, `${uid}/viewedMovies/movies`)
		);
		const setNewMovieResp = await setDoc(newViewedMovie, movieAdded);
		console.log({ movieAdded, setNewMovieResp });
	};
};
