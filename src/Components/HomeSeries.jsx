import { React, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { ViewedCards } from '../Components/ViewedCards';
import { devices } from '../Styles/breakpoints/responsive';

export const HomeSeries = () => {
	const viewedMovies = useSelector((state) => state.views.views);
	const { displayName } = useSelector((state) => state.auth);

	const firstName = displayName.split(/\b(\s)/);

	return (
		<>
			<Container className="animate__animated animate__fadeIn animate__faster">
				<TypeTitle>Series</TypeTitle>
				<Divider />
				<ListadoCards>
					{viewedMovies.length === 0 ? (
						<NothingAdded>
							{firstName[0]}, Todavía no agregaste nada.. empezá
							haciendo click en el botón +
						</NothingAdded>
					) : (
						viewedMovies
							?.filter((item) => item.media_type === 'tv')
							.map((item) => (
								<ViewedCards
									item={item}
									key={item.id}
								></ViewedCards>
							))
					)}
				</ListadoCards>
			</Container>
		</>
	);
};

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

const Container = styled.div`
	margin: 0 auto;
	padding: 2% 10%;
	width: 100%;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	@media ${devices.tablet} {
		padding: 5% 10% 30% 10%;
	}
`;

const TypeTitle = styled.h2`
	color: #fff;
	margin-bottom: 5px;
`;

const Divider = styled.div`
	height: 1px;
	background-color: #aaaaaa;
`;

const NothingAdded = styled.div`
	color: #ffffff;
`;
