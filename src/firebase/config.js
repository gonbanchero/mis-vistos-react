// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: 'AIzaSyAlbyPTDSeizAeVPbij9hlZMgVXXUP56pU',
	authDomain: 'mis-vistos.firebaseapp.com',
	databaseURL: 'https://mis-vistos-default-rtdb.firebaseio.com',
	projectId: 'mis-vistos',
	storageBucket: 'mis-vistos.appspot.com',
	messagingSenderId: '663348235153',
	appId: '1:663348235153:web:7074e2604c6c5f57366830',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
