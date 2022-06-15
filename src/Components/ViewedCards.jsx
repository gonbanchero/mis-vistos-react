import React from 'react';
import styled from 'styled-components';
import Imagen from '../img/contemplative-reptile.jpg';
import { Link } from 'react-router-dom';
import { ReactComponent as StarIcon } from '../img/star.svg';

export const ViewedCards = (item) => {
	const handleWsp = () => {
		window.open(
			`https://api.whatsapp.com/send?text=Te recomiendo que mires "${
				item.item.name || item.item.original_title
			}".%0AYo le puse ${item.item.puntaje} puntos.`,
			'_self'
		);
	};

	return (
		<Card>
			{item.item.backdrop_path === undefined ? (
				<Img src={Imagen} />
			) : (
				<Img
					src={
						'https://image.tmdb.org/t/p/w500' +
						item.item.backdrop_path
					}
				/>
			)}
			<Info>
				<Title>{item.item.name || item.item.original_title}</Title>
				<Score>
					{item.item.puntaje === '1' ? (
						<StarIcon style={{ fill: '#fff' }}></StarIcon>
					) : null}
					{item.item.puntaje === '2' ? (
						<>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
						</>
					) : null}
					{item.item.puntaje === '3' ? (
						<>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
						</>
					) : null}
					{item.item.puntaje === '4' ? (
						<>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
						</>
					) : null}
					{item.item.puntaje === '5' ? (
						<>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
							<StarIcon style={{ fill: '#fff' }}></StarIcon>
						</>
					) : null}
				</Score>
			</Info>

			<Footer>
				<Button key={item.item.id} onClick={handleWsp}>
					Compartir
				</Button>
				{item.item.media_type === 'movie' ? (
					<Button>
						<Link to={`/movie/${item.item.id}`}>Ver Más</Link>
					</Button>
				) : (
					<Button>
						<Link to={`/tv/${item.item.id}`}>Ver Más</Link>
					</Button>
				)}
			</Footer>
		</Card>
	);
};

const Card = styled.div`
	max-width: 270px;
	height: auto;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const Img = styled.img`
	max-width: 271px;
	border-radius: 10px 10px 0px 0px;
`;

const Info = styled.div`
	display: flex;
	justify-content: space-around;
	background-color: #314159;
	width: 100%;
	align-items: center;
`;

const Title = styled.div`
	background-color: #314159;
	width: 100%;
	color: #fff;
	font-size: 15px;
	padding: 12px;
	box-sizing: border-box;
`;

const Footer = styled.div`
	background-color: #869cbc;
	padding: 10px;
	width: 100%;
	box-sizing: border-box;
	border-radius: 0px 0px 10px 10px;
	display: flex;
	justify-content: space-around;
`;

const Button = styled.div`
	color: #fff;
	font-size: 13px;
	cursor: pointer;
`;

const Score = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	min-width: 30%;
	padding: 0px 10px;
`;
