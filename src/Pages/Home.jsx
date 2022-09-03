import { React, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { startLoadingViewed } from '../store/views';
import { HomeMovie, HomeSeries } from '../Components/';
import { Search } from '../Components/Search';

export const Home = () => {
	const activeMenu = useSelector((state) => state.menu.activeMenu);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startLoadingViewed());
	});

	return (
		<>
			{activeMenu === 'movies' ? <HomeMovie /> : null}
			{activeMenu === 'series' ? <HomeSeries /> : null}
			{activeMenu === 'addnew' ? <Search /> : null}
			{activeMenu === 'logout' ? null : null}
		</>
	);
};
