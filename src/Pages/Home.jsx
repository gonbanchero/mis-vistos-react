import { React, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { devices } from '../Styles/breakpoints/responsive';

import { startLoadingViewed } from '../store/views';
import { HomeMovie, HomeSeries } from '../Components/';
import { Search } from '../Components/Search';

export const Home = () => {
	const activeMenu = useSelector((state) => state.menu.activeMenu);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startLoadingViewed());
	}, []);

	return (
		<>
			{activeMenu === 'movies' ? <HomeMovie /> : null}
			{activeMenu === 'series' ? <HomeSeries /> : null}
			{activeMenu === 'addnew' ? <Search /> : null}
		</>
	);
};

const WelcomeContainer = styled.div`
	margin: 0 auto;
	padding: 50px 100px;
	display: flex;
	flex-direction: column;
	justify-content: top;
	align-items: center;
	max-width: 800px;
	min-height: calc(100vh - 290px);

	@media ${devices.tablet} {
		width: auto;
		padding: 50px 30px;
	}
`;

const WelcomeTitle = styled.h2`
	text-align: center;
	font-size: 1.7rem;
	color: #fff;
`;

const WelcomeText = styled.p`
	color: #fff;
	text-align: center;
	line-height: 2rem;
`;
