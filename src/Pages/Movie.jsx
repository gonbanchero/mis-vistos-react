import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Imagen from '../img/contemplative-reptile.jpg';
import { primary } from '../Styles/Colors';
import { devices } from '../Styles/breakpoints/responsive';

export const Movie = () => {
	const [movie, setMovie] = useState();
	const { id } = useParams();

	useEffect(() => {
		const fetch = async () => {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=3907f1e02c5af5a6eb040f19d19e5a97&language=es`
			);
			setMovie(response.data);
		};
		fetch();
	}, []);

	const navigate = useNavigate();

	return (
		<Container>
			<Izquierda>
				{movie?.poster_path === undefined ? (
					<Img src={Imagen} alt={movie?.original_title}></Img>
				) : (
					<Img
						src={
							'https://image.tmdb.org/t/p/w500' +
							movie?.poster_path
						}
						srcSet={
							'https://image.tmdb.org/t/p/w500' +
							movie?.poster_path
						}
						alt={movie?.original_title}
						loading="lazy"
					/>
				)}
			</Izquierda>
			<Derecha>
				<Titulo>{movie?.original_title || movie?.name}</Titulo>
				<Fecha>Fecha de estreno: {movie?.release_date}</Fecha>
				<Reseña>{movie?.overview}</Reseña>
				<Button size="small" onClick={() => navigate(-1)}>
					Volver
				</Button>{' '}
			</Derecha>
		</Container>
	);
};

const Container = styled.section`
	margin: 0 auto;
	padding: 60px 0px;
	display: flex;
	max-width: 1500px;
	justify-content: center;
	align-items: center;
	flex-direction: row;

	@media ${devices.laptop} {
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
	@media ${devices.laptopL} {
		width: 100%;
	}
`;

const Izquierda = styled.div`
	max-width: 40%;
	padding: 20px;
	display: flex;
	justify-content: center;
	@media ${devices.laptop} {
		width: 100%;
		padding: 0;
	}
	@media ${devices.laptopL} {
		padding: 0;
	}
`;

const Img = styled.img`
	@media ${devices.laptop} {
		width: 100%;
	}
	@media ${devices.laptopL} {
		width: 70%;
		padding: 0;
	}
`;

const Derecha = styled.div`
	box-sizing: border-box;
	max-width: 60%;
	padding: 80px;
	display: flex;
	flex-direction: column;
	@media ${devices.laptop} {
		width: 100%;
		padding: 40px 0px;
	}
	@media ${devices.laptopL} {
		padding: 50px;
	}
`;

const Titulo = styled.h1`
	font-size: 2rem;
	text-align: center;
	color: #fff;
	margin-top: 20px;
	margin-top: 10px;
`;

const Reseña = styled.p`
	font-size: 1rem;
	line-height: 1.7rem;
	text-align: center;
	color: #fff;
	font-weight: 400;
`;

const Fecha = styled.p`
	font-size: 1rem;
	text-align: center;
	color: #fff;
	font-weight: 400;
`;

const Button = styled.button`
	background-color: transparent;
	border: none;
	color: ${primary};
	margin-top: 30px;
	font-size: 17px;
`;

const Platform = styled.div`
	color: #fff;
	text-align: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	margin-bottom: 15px;
`;
