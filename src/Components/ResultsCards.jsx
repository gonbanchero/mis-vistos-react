import React from 'react';
import styled from 'styled-components';
import Imagen from '../img/contemplative-reptile.jpg';
import { useDispatch } from 'react-redux';

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
				<Button
					key={props.item.id}
					onClick={() => {
						handleAdd(props.item);
					}}
				>
					Agregar
				</Button>
				<Button>Ver Más</Button>
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
`;
