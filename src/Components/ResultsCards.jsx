import React from 'react';
import styled from 'styled-components';
import Imagen from '../img/contemplative-reptile.jpg';
import { useDispatch } from 'react-redux';
import { devices } from '../Styles/breakpoints/responsive';
import { Link } from 'react-router-dom';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import InfoIcon from '@mui/icons-material/Info';

export const ResultsCards = (props) => {
	const dispatch = useDispatch();

	const handleAdd = (item) => {
		props.setOpenPopup(item);
	};

	return (
		<Card>
			{props.item.backdrop_path === undefined ? (
				<Img src={Imagen} />
			) : (
				<Img
					src={
						'https://image.tmdb.org/t/p/w500' +
						props.item.backdrop_path
					}
				/>
			)}

			<Title>{props.item.name || props.item.original_title}</Title>
			<Footer>
				<AddCircleIcon
					onClick={() => {
						handleAdd(props.item);
					}}
					sx={{
						color: '#ffffff',
						fontSize: '20px',
						cursor: 'pointer',
					}}
				/>
				<Button>
					{props.item.media_type === 'movie' ? (
						<Link to={`/movie/${props.item.id}`}>
							<InfoIcon
								sx={{
									color: '#ffffff',
									fontSize: '20px',
									cursor: 'pointer',
								}}
							/>
						</Link>
					) : (
						<Link to={`/tv/${props.item.id}`}>
							<InfoIcon
								sx={{
									color: '#ffffff',
									fontSize: '20px',
									cursor: 'pointer',
								}}
							/>
						</Link>
					)}
				</Button>
			</Footer>
		</Card>
	);
};

const Card = styled.div`
	counter-increment: grid-item;
	width: 100%;
	height: auto;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	align-self: center;
	margin-bottom: 30px;

	@media ${devices.tablet} {
		margin-bottom: 10px;
	}
`;

const Img = styled.img`
	width: 100%;
	border-radius: 10px 10px 0px 0px;
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
	text-decoration: none;
	cursor: pointer;
`;
