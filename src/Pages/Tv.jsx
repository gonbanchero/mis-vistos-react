import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Imagen from '../img/contemplative-reptile.jpg';
import { primary } from '../Styles/Colors';
import { devices } from '../Styles/breakpoints/responsive';

export const Tv = () => {
	const [tv, setTv] = useState();
	const { id } = useParams();

	useEffect(() => {
		const fetch = async () => {
			const response = await axios.get(
				`https://api.themoviedb.org/3/tv/${id}?api_key=3907f1e02c5af5a6eb040f19d19e5a97&language=es`
			);
			setTv(response.data);
		};
		fetch();
	}, []);

	console.log(tv);
	const navigate = useNavigate();

	return (
		<Container>
			<Izquierda>
				{tv?.poster_path === undefined ? (
					<Img src={Imagen} alt={tv?.original_title}></Img>
				) : (
					<Img
						src={
							'https://image.tmdb.org/t/p/w500' + tv?.poster_path
						}
						srcSet={
							'https://image.tmdb.org/t/p/w500' + tv?.poster_path
						}
						alt={tv?.original_title}
						loading="lazy"
					/>
				)}
			</Izquierda>
			<Derecha>
				<Titulo>{tv?.original_title || tv?.name}</Titulo>
				<Fecha>
					Fecha de estreno:
					<p>{tv?.first_air_date}</p>
				</Fecha>
				<Platform>
					Podés verla en:
					<PlatformImgContainer>
						{tv?.networks.map((platform) => (
							<PlatformImg
								src={
									'https://image.tmdb.org/t/p/w500' +
									platform?.logo_path
								}
								srcSet={
									'https://image.tmdb.org/t/p/w500' +
									platform?.logo_path
								}
								alt={platform?.original_title}
								loading="lazy"
							></PlatformImg>
						))}
					</PlatformImgContainer>
				</Platform>
				<Reseña>{tv?.overview}</Reseña>
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

const PlatformImgContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	background-color: #fff;
	padding: 15px;
`;

const PlatformImg = styled.img`
	width: 100px;
`;
