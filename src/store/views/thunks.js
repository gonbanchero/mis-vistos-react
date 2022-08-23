import { ViewedMovie, SetViewed } from '../../store/views';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

import { loadViewed } from '../../helpers/';
import { useSelector } from 'react-redux';

//! FALTA LA LÓGICA DE QUE NO SUME A LOS VISTOS SI YA ESTÁ AGREGADO, SOLO QUE ACTUALICE EL PUNTAJE

export const startAddingMovie = (movieAdded, score) => {
	console.log(movieAdded, score);
	return async (dispatch, getState) => {
		// Ver duplicados

		// const moviesInState = useSelector((state) => state.views.views);

		// const existingViewedMovie = moviesInState.find(
		// 	(viewed) => viewed.id === moviesInState.id
		// );

		// console.log(existingViewedMovie);

		console.log('agregamos la movie ameo', getState());

		const { uid } = getState().auth;

		const newViewedMovie = doc(
			collection(FirebaseDB, `${uid}/viewedMovies/movies`)
		);
		const setNewMovieResp = await setDoc(newViewedMovie, movieAdded);
		console.log({ movieAdded, setNewMovieResp });
		dispatch(ViewedMovie(movieAdded));
	};
};

export const startLoadingViewed = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if (!uid) throw new Error('El UID del usuario no existe');

		const movies = await loadViewed(uid);
		console.log(movies);

		dispatch(SetViewed(movies));
		console.log({ uid });
	};
};

// export const viewedMovie = (movieToAdd, scoreToAdd) => (dispatch) => {
// 	dispatch(viewsReducer({ ...movieToAdd, puntaje: scoreToAdd }));
// };

// export const handleViewedMovie = (state, payload) => {
//

// 	if (existingViewedMovie) {
// 		return state.map((movie) => {
// 			return movie.id === payload.id
// 				? { ...movie, puntaje: payload.puntaje }
// 				: movie;
// 		});
// 	}

// 	return [...state, { ...payload, puntaje: payload.puntaje }];
// };
