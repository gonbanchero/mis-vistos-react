import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ViewedCards } from '../Components/ViewedCards';

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
	grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
	margin: 0px auto;
	padding: 50px 0px;
	gap: 40px;
	max-width: 1500px;
	width: auto;
`;

const WelcomeContainer = styled.div`
	margin: 0 auto;
	padding: 50px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 800px;
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
	padding-top: 40px;
	max-width: 1400px;
	display: flex;
	flex-direction: column;
`;

const TypeTitle = styled.h2`
	color: #fff;
	margin-bottom: 5px;
`;

const Divider = styled.div`
	height: 1px;
	background-color: #aaaaaa;
`;
