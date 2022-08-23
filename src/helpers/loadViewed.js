import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadViewed = async (uid = '') => {
	if (!uid) throw new Error('El UID del usuario no existe');

	const collectionRef = collection(FirebaseDB, `${uid}/viewedMovies/movies`);
	const movies = await getDocs(collectionRef);

	const viewedMovies = [];

	movies.forEach((movie) => {
		viewedMovies.push(movie.data());
	});

	return viewedMovies;
};
