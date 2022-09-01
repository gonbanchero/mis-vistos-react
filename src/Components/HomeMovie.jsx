import { React, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { ViewedCards } from '../Components/ViewedCards';
import { devices } from '../Styles/breakpoints/responsive';

import { startLoadingViewed } from '../store/views';

export const HomeMovie = () => {
	const viewedMovies = useSelector((state) => state.views.views);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startLoadingViewed());
	}, []);

	return (
		<>
			<Container>
				<TypeTitle>Películas</TypeTitle>
				<Divider />
				<ListadoCards>
					{viewedMovies
						?.filter((item) => item.media_type === 'movie')
						.map((item) => (
							<ViewedCards
								item={item}
								key={item.id}
							></ViewedCards>
						))}
				</ListadoCards>
			</Container>
		</>
	);
};

const Container = styled.div`
	margin: 0 auto 150px auto;
	padding: 2% 10%;
	width: 100%;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	@media ${devices.tablet} {
		padding: 5% 10% 30% 10%;
	}
`;

const ListadoCards = styled.div`
	display: grid;
	counter-reset: grid-items;
	position: relative;
	grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
	margin: 50px 0px;
	gap: 3%;
	max-width: 1900px;
	width: 100%;
	box-sizing: border-box;
	width: auto;
`;

const TypeTitle = styled.h2`
	color: #fff;
	margin-bottom: 5px;
`;

const Divider = styled.div`
	height: 1px;
	background-color: #aaaaaa;
`;
