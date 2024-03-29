import React from 'react';
import styled from 'styled-components';
import Imagen from '../img/contemplative-reptile.jpg';
import { Link } from 'react-router-dom';

import { Rating } from '@mui/material';
import { devices } from '../Styles/breakpoints/responsive';
import { startDeletingMovie } from '../store/views';
import { useDispatch } from 'react-redux';

import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

export const ViewedCards = (item) => {
	const handleWsp = () => {
		window.open(
			`https://api.whatsapp.com/send?text=Te recomiendo que mires "${
				item.item.name || item.item.original_title
			}".%0AYo le puse ${item.item.puntaje} puntos.`,
			'_blank'
		);
	};

	const dispatch = useDispatch();

	const handleBorrar = (id) => {
		dispatch(startDeletingMovie(id));
	};

	const cutName = (name) => {
		const cut = name.slice(0, 23);
		return cut.length >= 23 ? `${cut} ....` : name;
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
				<Title>
					{cutName(item.item.name || item.item.original_title)}
				</Title>
				<Score>
					<Rating value={item.item.puntaje} readOnly size="small" />
				</Score>
			</Info>

			<Footer>
				<ShareIcon
					onClick={handleWsp}
					sx={{
						color: '#ffffff',
						fontSize: '20px',
						cursor: 'pointer',
					}}
				/>

				{item.item.media_type === 'movie' ? (
					<Link to={`/movie/${item.item.id}`}>
						<InfoIcon
							sx={{
								color: '#ffffff',
								fontSize: '20px',
								cursor: 'pointer',
							}}
						/>
					</Link>
				) : (
					<Link to={`/tv/${item.item.id}`}>
						<InfoIcon
							sx={{
								color: '#ffffff',
								fontSize: '20px',
								cursor: 'pointer',
							}}
						/>
					</Link>
				)}
				<DeleteIcon
					onClick={() => {
						handleBorrar(item.item.firebase_id);
					}}
					sx={{
						color: '#ffffff',
						fontSize: '20px',
						cursor: 'pointer',
					}}
				/>
			</Footer>
		</Card>
	);
};

const Card = styled.div`
	counter-increment: grid-item;
	max-width: 400px;
	height: auto;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	@media ${devices.tablet} {
		max-width: 100%;
	}
`;

const Img = styled.img`
	width: 100%;
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

const Score = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	min-width: 30%;
	padding: 0px 10px;
`;
