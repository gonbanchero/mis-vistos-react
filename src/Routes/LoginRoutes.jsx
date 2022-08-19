import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Search } from '../Pages/Search';
import { Movie } from '../Pages/Movie';
import { Tv } from '../Pages/Tv';

export const LoginRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route exact path="/movie/:id" element={<Movie />} />
			<Route exact path="/tv/:id" element={<Tv />} />
			<Route path="/search" element={<Search />} />
			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	);
};
