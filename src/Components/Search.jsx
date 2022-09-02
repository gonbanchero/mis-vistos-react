import React from 'react';
import styled from 'styled-components';
import { primary, secondary } from '../Styles/Colors';
import { useRef } from 'react';
import { searchForMovie } from '../store/search/thunks';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ResultsCards } from './ResultsCards';
import { Score } from './Score';
import { useOpenPopup } from '../Hooks/useOpenPopup';
import { devices } from '../Styles/breakpoints/responsive';

export const Search = () => {
	const openedPopup = useOpenPopup();

	const dispatch = useDispatch();

	const enterHandler = (e) => {
		if (e.key === 'Enter' || e.keyCode === 13) handleSubmit();
	};

	const busqueda = useRef();

	const handleSubmit = () => {
		dispatch(searchForMovie(busqueda.current.value));
	};

	const { search } = useSelector((state) => state.search);

	return (
		<>
			<MainContainer className="animate__animated animate__fadeIn animate__faster">
				<Score {...openedPopup}></Score>
				<Container>
					<Input
						type="text"
						ref={busqueda}
						onKeyUp={enterHandler}
					></Input>
					<Button onClick={handleSubmit}>Buscar</Button>
				</Container>

				<ListadoCards className="animate__animated animate__fadeIn animate__faster">
					{search.length === 0
						? null // <NoResults>
						: // 	No se encontraron resultados con esa búsqueda...
						  // 	probá de nuevo.
						  // </NoResults>
						  search?.map((item) => (
								<ResultsCards
									item={item}
									key={item.id}
									{...openedPopup}
								></ResultsCards>
						  ))}
				</ListadoCards>
			</MainContainer>
		</>
	);
};

const MainContainer = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	padding: 30px 0px;
	min-height: calc(100vh - 250px);
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${devices.tablet} {
		width: 70%;
	}
`;

const Input = styled.input`
	margin: 10px 20px;
	padding: 10px;
	border: none;
	border-radius: 4px;
	width: 450px;
`;

const ListadoCards = styled.div`
	display: grid;
	counter-reset: grid-items;
	position: relative;
	grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
	margin: 50px 0px;
	gap: 1%;
	max-width: 1900px;
	width: 100%;
	padding: 0% 10%;
	box-sizing: border-box;
`;

export const Button = styled.button`
	background-color: ${secondary};
	border: none;
	padding: 10px 40px;
	color: #000;
	border-radius: 4px;
	cursor: pointer;
	&:hover  {
		background-color: ${primary};
	}
`;

const NoResults = styled.div`
	color: #ffffff;
	text-align: center;
`;
