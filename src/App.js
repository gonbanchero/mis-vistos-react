import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Header } from './Components/Header';
import { Search } from './Pages/Search';

import { Movie } from './Pages/Movie';
import { Tv } from './Pages/Tv';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/movie/:id" element={<Movie />} />
				<Route exact path="/tv/:id" element={<Tv />} />
				<Route path="/search" element={<Search />} />
			</Routes>
		</Router>
	);
}

export default App;
