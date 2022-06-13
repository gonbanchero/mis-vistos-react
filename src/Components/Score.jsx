import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { viewedMovie } from '../Redux/Views/views-reducer';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Pages/Search';
import { ReactComponent as CloseIcon } from '../img/close.svg';
import { useSelector } from 'react-redux';

export const ScorePopup = ({ openPopup, setOpenPopup }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const viewedMovies = useSelector((state) => state.views.views);
	console.log(viewedMovies);

	const score = useRef();

	const handleScore = (openPopup) => {
		console.log(score.current.value);
		console.log(openPopup);

		const existingViewedMovie = viewedMovies.find(
			(viewed) => viewed.id === openPopup.id
		);

		existingViewedMovie
			? alert('ya está agregada')
			: dispatch(viewedMovie(openPopup, score.current.value));
		setOpenPopup();
		navigate('/');
	};

	const handleClose = () => {
		setOpenPopup();
	};

	return (
		<>
			<DialogShadow onClick={handleClose} />
			<PopupContainer>
				<Close>
					<CloseIcon style={{ cursor: 'pointer' }}></CloseIcon>
				</Close>
				<Title>{openPopup.name || openPopup.original_title}</Title>
				<Text>
					¿Qué puntaje te gustaría ponerle a "
					{openPopup.name || openPopup.original_title}"?
				</Text>
				<InputContainer>
					<Input ref={score}>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Input>
					<Button
						onClick={() => {
							handleScore(openPopup);
						}}
					>
						Enviar
					</Button>
				</InputContainer>
			</PopupContainer>
		</>
	);
};

export const Score = (props) => {
	if (!props.openPopup) return null;
	console.log(props.openPopup);

	return <ScorePopup {...props} />;
};

const PopupContainer = styled.div`
	position: fixed;
	background-color: #fff;
	width: 400px;
	max-height: calc(100%- 100px);
	left: calc(50% - 250px);
	top: 250px;
	z-index: 5;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 8px;
	padding: 20px;
`;

const Close = styled.div`
	position: absolute;
	top: 15px;
	right: 20px;
`;

const Title = styled.h3`
	text-align: center;
`;

const Text = styled.p`
	text-align: center;
	font-size: 1rem;
`;

const InputContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 15px;
`;
const Input = styled.select`
	width: 100%;
`;

export const DialogShadow = styled.div`
	width: 100vw;
	height: 100vh;
	top: 0;
	background-color: black;
	opacity: 0.7;
	position: fixed;
	z-index: 4;
`;
