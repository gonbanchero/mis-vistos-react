import { ViewedMovie, SetViewed } from '../../store/views';
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

import { loadViewed } from '../../helpers/';
import { async } from '@firebase/util';

export const startAddingMovie = (movieAdded, score) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const movieWithScore = { ...movieAdded, puntaje: score };

		//? Ubica el el path del doc a actualizar
		const newViewedMovie = doc(
			collection(FirebaseDB, `${uid}/viewedMovies/movies`)
		);

		//? Lógica para detectar duplicados
		const previousAddedMovies = getState().views.views;

		const existingViewedMovie = previousAddedMovies.find(
			(viewed) => viewed.id === movieAdded.id
		);

		//? Si no existe la peli, esta función la manda a firebase
		const addNewMovie = async (newViewedMovie, movieWithScore) => {
			movieWithScore.firebase_id = newViewedMovie.id;

			const setNewMovieResp = await setDoc(
				newViewedMovie,
				movieWithScore
			);

			// dispatch(ViewedMovie(movieWithScore));
		};

		//? Si existe la peli, esta funcion actualiza la info en firebase
		const updateExistingMovie = async (existingViewedMovie, score) => {
			const movieToFirestore = { ...existingViewedMovie, puntaje: score };
			delete movieToFirestore.firebase_id;

			const docRef = doc(
				FirebaseDB,
				`${uid}/viewedMovies/movies/${existingViewedMovie.firebase_id}`
			);
			await setDoc(docRef, movieToFirestore, { merge: true });

			// dispatch(ViewedMovie(newScore));
		};

		//? Condicionales
		existingViewedMovie
			? updateExistingMovie(existingViewedMovie, score)
			: addNewMovie(newViewedMovie, movieWithScore);
	};
};

export const startLoadingViewed = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if (!uid) throw new Error('El UID del usuario no existe');

		const movies = await loadViewed(uid);

		dispatch(SetViewed(movies));
	};
};

export const startDeletingMovie = (id) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		console.log(id, { uid });

		const docRef = doc(FirebaseDB, `${uid}/viewedMovies/movies/${id}`);
		await deleteDoc(docRef);
		dispatch(startLoadingViewed());
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

// Ver duplicados

// const moviesInState = useSelector((state) => state.views.views);
// console.log(moviesInState);

// const existingViewedMovie = moviesInState.find(
// 	(viewed) => viewed.id === moviesInState.id
// );

// console.log(existingViewedMovie);

// if (existingViewedMovie) {
// 	return moviesInState.map((movie) => {
// 		return movie.id === movieAdded.id
// 			? { ...movie, puntaje: movieAdded.puntaje }
// 			: movie;
// 	});
// }

// console.log(existingViewedMovie);

// if (existingViewedMovie) {
// 	return previousAddedMovies.map((movie) => {
// 		return movie.id === movieAdded.id
// 			? { ...movie, puntaje: score }
// 			: movie;
// 	});
// }

//LOGICA PARA DETECTAR LOS DUPLICADOS
// const previousAddedMovies = getState().views.views;

// const existingViewedMovie = previousAddedMovies.find(
// 	(viewed) => viewed.id === movieAdded.id
// );

// const moviesIds = previousAddedMovies.map((movie) => movie.id);
// const findDuplicated = moviesIds.indexOf(moviesIds.id) === -1;
// console.log(findDuplicated);
