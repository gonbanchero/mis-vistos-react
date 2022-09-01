import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import { Header } from './Components/Header';
import { MenuBar } from './Components';
import { Footer } from './Components/Footer';

import { LoginRoutes } from './Routes/LoginRoutes';

import { CheckingAuth } from './Components/CheckingAuth';
import { LoggedoutRoutes } from './Routes/LoggedoutRoutes';
import { useCheckAuth } from './Hooks/useCheckAuth';

function App() {
	const { status } = useCheckAuth();

	if (status === 'checking') {
		return <CheckingAuth />;
	}

	return (
		<Router>
			<Header />
			<Routes>
				{status === 'authenticated' ? (
					<Route path="/*" element={<LoginRoutes />} />
				) : (
					<Route path="auth/*" element={<LoggedoutRoutes />} />
				)}
				<Route path="/*" element={<Navigate to="/auth/login" />} />
			</Routes>

			{status === 'authenticated' ? <MenuBar /> : null}
		</Router>
	);
}

export default App;
