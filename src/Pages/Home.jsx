import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ViewedCards } from '../Components/ViewedCards';
import { Link } from 'react-router-dom';
import { devices } from '../Styles/breakpoints/responsive';

export const Home = () => {
	const viewedMovies = useSelector((state) => state.views.views);
	console.log(viewedMovies);

	return (
		<>
			{viewedMovies.length === 0 ? (
				<WelcomeContainer>
					<WelcomeTitle>
						Hola! Te damos la bienvenida a "Mis Vistos"
					</WelcomeTitle>
					<WelcomeText>
						En esta App podrás agregar tus peliculas o series vistas
						para que cuando te pregunten "¿Qué me recomendás para
						mirar?" tengas tus favoritos siempre a mano.
					</WelcomeText>
					<WelcomeText>
						👉 Empezá agregando tu primer "visto" haciendo click en
						el ícono +
					</WelcomeText>
				</WelcomeContainer>
			) : (
				<>
					<Container>
						<TypeTitle>Series</TypeTitle>
						<Divider />
						<ListadoCards>
							{viewedMovies
								?.filter((item) => item.media_type === 'tv')
								.map((item) => (
									<ViewedCards
										item={item}
										key={item.id}
									></ViewedCards>
								))}
						</ListadoCards>
					</Container>
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
			)}
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

const WelcomeContainer = styled.div`
	margin: 0 auto;
	padding: 50px 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 800px;
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
