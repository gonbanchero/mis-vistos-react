import { React, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { ViewedCards } from '../Components/ViewedCards';
import { devices } from '../Styles/breakpoints/responsive';

import { startLoadingViewed } from '../store/views';

export const HomeMovie = () => {
	const viewedMovies = useSelector((state) => state.views.views);
	const { displayName } = useSelector((state) => state.auth);

	const firstName = displayName.split(/\b(\s)/);

	return (
		<>
			<Container className="animate__animated animate__fadeIn animate__faster">
				<TypeTitle>Películas</TypeTitle>
				<Divider />
				<ListadoCards>
					{viewedMovies.length === 0 ? (
						<NothingAdded>
							{firstName[0]}, Todavía no agregaste nada.. empezá
							haciendo click en el botón +
						</NothingAdded>
					) : (
						viewedMovies
							?.filter((item) => item.media_type === 'movie')
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

const NothingAdded = styled.div`
	color: #ffffff;
`;
// const WelcomeContainer = styled.div`
// 	margin: 0 auto;
// 	padding: 50px 100px;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: top;
// 	align-items: center;
// 	max-width: 800px;
// 	min-height: calc(100vh - 290px);

// 	@media ${devices.tablet} {
// 		width: auto;
// 		padding: 50px 30px;
// 	}
// `;

// const WelcomeTitle = styled.h2`
// 	text-align: center;
// 	font-size: 1.7rem;
// 	color: #fff;
// `;

// const WelcomeText = styled.p`
// 	color: #fff;
// 	text-align: center;
// 	line-height: 2rem;
// `;

// <>
// 	{viewedMovies.length === 0 ? (
// 		<WelcomeContainer className="animate__animated animate__fadeIn animate__faster">
// 			<WelcomeTitle>
// 				Hola {displayName}! Te damos la bienvenida a "Mis
// 				Vistos"
// 			</WelcomeTitle>
// 			<WelcomeText>
// 				En esta App podrás agregar tus peliculas o series vistas
// 				para que cuando te pregunten "¿Qué me recomendás para
// 				mirar?" tengas tus favoritos siempre a mano.
// 			</WelcomeText>
// 			<WelcomeText>
// 				👉 Empezá agregando tu primer "visto" haciendo click en
// 				el ícono +
// 			</WelcomeText>
// 		</WelcomeContainer>
// 	) : null}
// </>
