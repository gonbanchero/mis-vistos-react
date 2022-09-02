import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ReactComponent as CloseIcon } from '../img/close.svg';
import { useSelector } from 'react-redux';
import { devices } from '../Styles/breakpoints/responsive';
import { startLoadingViewed } from '../store/views/thunks';

// MUI
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { primary } from '../Styles/Colors';
import { startAddingMovie } from '../store/views/thunks';
import { ActiveMenu } from '../store/menubar/menuSlice';

export const ScorePopup = ({ openPopup, setOpenPopup }) => {
	const dispatch = useDispatch();

	const viewedMovies = useSelector((state) => state.views.views);

	const handleScore = (openPopup) => {
		dispatch(startAddingMovie(openPopup, value));
		setOpenPopup();

		openPopup.media_type === 'movie'
			? dispatch(ActiveMenu('movies'))
			: dispatch(ActiveMenu('series'));
		dispatch(startLoadingViewed());
	};

	const handleScoreStay = (openPopup) => {
		dispatch(startAddingMovie(openPopup, value));
		setOpenPopup();
		dispatch(startLoadingViewed());
	};

	const handleUpdateScore = (openPopup) => {
		dispatch(startAddingMovie(openPopup, value));
		setOpenPopup();
		openPopup.media_type === 'movie'
			? dispatch(ActiveMenu('movies'))
			: dispatch(ActiveMenu('series'));
		dispatch(startLoadingViewed());
	};

	const handleUpdateScoreStay = (openPopup) => {
		dispatch(startAddingMovie(openPopup, value));
		setOpenPopup();
		dispatch(startLoadingViewed());
	};

	const handleClose = () => {
		setOpenPopup();
	};

	// LÓGICA MUI STARS

	const labels = {
		1: 'Malisima',
		2: 'Safa con pochoclos',
		3: 'Buena',
		4: 'Buenisima',
		5: 'Épica',
	};

	function getLabelText(value) {
		return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
	}

	const [value, setValue] = React.useState(2);
	const [hover, setHover] = React.useState(-1);

	// EVALUA SI ITEM ELEGIDO ESTÁ YA CARGADO EN LOS VISTOS CON EL RETURN SE HACE LA CONDICIÓN EN EL COMPONENTE Y MUESTRA 2 INFOS DIFERENTES EN EL POPUP
	const printConditionViewed = (viewedMovies) => {
		const existingViewedMovie = viewedMovies.find(
			(viewed) => viewed.id === openPopup.id
		);
		return existingViewedMovie;
	};

	return (
		<>
			<DialogShadow onClick={handleClose} />
			<PopupContainer>
				<Close>
					<CloseIcon
						style={{ cursor: 'pointer' }}
						onClick={handleClose}
					></CloseIcon>
				</Close>

				{printConditionViewed(viewedMovies) ? (
					<>
						<Title>
							{openPopup.name || openPopup.original_title} ya está
							agregada
						</Title>
						<Text>¿Te gustaría actualizar su puntaje?</Text>
						<InputContainer>
							<Box
								sx={{
									width: 200,
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<Rating
									name="hover-feedback"
									value={value}
									precision={1}
									getLabelText={getLabelText}
									onChange={(event, newValue) => {
										setValue(newValue);
									}}
									onChangeActive={(event, newHover) => {
										setHover(newHover);
									}}
									emptyIcon={
										<StarIcon
											style={{ opacity: 0.55 }}
											fontSize="inherit"
										/>
									}
								/>
								{value !== null && (
									<Box sx={{ ml: 2 }}>
										{labels[hover !== -1 ? hover : value]}
									</Box>
								)}
							</Box>
							<ButtonContainer>
								<ButtonScore
									onClick={() => {
										handleUpdateScore(openPopup);
									}}
								>
									Actualizar y Volver
								</ButtonScore>
								<ButtonScore
									onClick={() => {
										handleUpdateScoreStay(openPopup);
									}}
								>
									Agregar y buscar +
								</ButtonScore>
							</ButtonContainer>
						</InputContainer>
					</>
				) : (
					<>
						<Title>
							{openPopup.name || openPopup.original_title}
						</Title>
						<Text>
							¿Qué puntaje te gustaría ponerle a "
							{openPopup.name || openPopup.original_title}"?
						</Text>
						<InputContainer>
							<Box
								sx={{
									width: 200,
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<Rating
									name="hover-feedback"
									value={value}
									precision={1}
									getLabelText={getLabelText}
									onChange={(event, newValue) => {
										setValue(newValue);
									}}
									onChangeActive={(event, newHover) => {
										setHover(newHover);
									}}
									emptyIcon={
										<StarIcon
											style={{ opacity: 0.55 }}
											fontSize="inherit"
										/>
									}
								/>
								{value !== null && (
									<Box sx={{ ml: 2 }}>
										{labels[hover !== -1 ? hover : value]}
									</Box>
								)}
							</Box>
							<ButtonContainer>
								<ButtonScore
									onClick={() => {
										handleScore(openPopup);
									}}
								>
									Agregar y Volver
								</ButtonScore>
								<ButtonScore
									onClick={() => {
										handleScoreStay(openPopup);
									}}
								>
									Agregar y buscar +
								</ButtonScore>
							</ButtonContainer>
						</InputContainer>
					</>
				)}
			</PopupContainer>
		</>
	);
};

export const Score = (props) => {
	if (!props.openPopup) return null;
	// console.log(props.openPopup);

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

	@media ${devices.tablet} {
		left: calc(50% - 200px);
		top: 300px;
	}

	@media (max-width: 550px) {
		left: calc(50% - 170px);
		top: 300px;
		width: 320px;
	}

	@media ${devices.mobileL} {
		left: 5%;
		width: 80%;
		top: 150px;
	}
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

export const DialogShadow = styled.div`
	width: 100vw;
	height: 100vh;
	top: 0;
	background-color: black;
	opacity: 0.7;
	position: fixed;
	z-index: 4;
`;

const ButtonScore = styled.button`
	padding: 7px;
	border: 0;
	background-color: ${primary};
	cursor: pointer;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
	margin-top: 20px;
`;
