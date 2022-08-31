import { ViewedMovie, SetViewed } from '../../store/views';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

import { loadViewed } from '../../helpers/';

//! FALTA LA LÓGICA DE QUE NO SUME A LOS VISTOS SI YA ESTÁ AGREGADO, SOLO QUE ACTUALICE EL PUNTAJE

export const startAddingMovie = (movieAdded, score) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const movieWithScore = { ...movieAdded, puntaje: score };
		const newViewedMovie = doc(
			collection(FirebaseDB, `${uid}/viewedMovies/movies`)
		);

		//LÓGICA PARA DETECTAR DUPLICADOS
		const previousAddedMovies = getState().views.views;

		const existingViewedMovie = previousAddedMovies.find(
			(viewed) => viewed.id === movieAdded.id
		);

		//Si no existe la peli, esta función la manda a firebase y al store
		const addNewMovie = async (newViewedMovie, movieWithScore) => {
			movieWithScore.firebase_id = newViewedMovie.id;

			const setNewMovieResp = await setDoc(
				newViewedMovie,
				movieWithScore
			);

			dispatch(ViewedMovie(movieWithScore));
		};

		//Si existe la peli, esta funcion actualiza la info en firebase
		const updateExistingMovie = async (existingViewedMovie) => {
			const movieToFirestore = { ...existingViewedMovie };
			delete movieToFirestore.firebase_id;

			const docRef = doc(
				FirebaseDB,
				`${uid}/viewedMovies/movies/${existingViewedMovie.firebase_id}`
			);
			await setDoc(docRef, movieToFirestore, { merge: true });
			dispatch(ViewedMovie(...movie));
		};

		existingViewedMovie
			? updateExistingMovie(existingViewedMovie)
			: addNewMovie(newViewedMovie, movieWithScore);

		// console.log({ movieAdded, setNewMovieResp });
	};
};

export const startLoadingViewed = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if (!uid) throw new Error('El UID del usuario no existe');

		const movies = await loadViewed(uid);
		// console.log(movies);

		dispatch(SetViewed(movies));
		// console.log({ uid });
	};
};
