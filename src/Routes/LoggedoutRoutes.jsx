import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../Pages/LoginPage';
import { RegisterPage } from '../Pages/RegisterPage';

export const LoggedoutRoutes = () => {
	return (
		<Routes>
			<Route path="login" element={<LoginPage />} />
			<Route path="register" element={<RegisterPage />} />

			<Route path="/*" element={<Navigate to="login" />} />
		</Routes>
	);
};
