import { checkingCredentials, logout, login } from './';
import { ClearViewsLogout } from '../views';

import {
	logoutFirebase,
	signInWithGoogle,
	registerUserWithEmailPassword,
	loginWithEmailPassword,
} from '../../firebase/providers';
import { Navigate } from 'react-router-dom';
import { ClearSearchLogout } from '../search/searchSlice';
import { ActiveMenu } from '../menubar/menuSlice';

export const checkingAuthentication = (email, password) => {
	return async ({ dispatch }) => {
		dispatch(checkingCredentials());
	};
};

export const StartGoogleSignIn = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		const result = await signInWithGoogle();
		if (!result.ok) return dispatch(logout(result.errorMessage));

		dispatch(login(result));
	};
};

export const startCreatingUserWithEmailPassword = ({
	email,
	password,
	displayName,
}) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		const result = await registerUserWithEmailPassword({
			email,
			password,
			displayName,
		});

		if (!result.ok) return dispatch(logout(result));
		dispatch(login({ result }));
	};
};

export const startLoginWithEmailPassword = ({ email, password }) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await loginWithEmailPassword({
			email,
			password,
		});
		if (!result.ok) return dispatch(logout(result));
		dispatch(login(result));
	};
};

export const startLogout = () => {
	return async (dispatch) => {
		await logoutFirebase();
		dispatch(ClearViewsLogout());
		dispatch(ClearSearchLogout());
		dispatch(logout());
		dispatch(ActiveMenu('movies'));
	};
};
