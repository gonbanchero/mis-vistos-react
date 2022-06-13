import React from 'react';
import styled from 'styled-components';
import { primary, secondary } from '../Styles/Colors';
import { useRef } from 'react';
import { searchForMovie } from '../Redux/Search/search-reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ResultsCards } from '../Components/ResultsCards';
import { Score } from '../Components/Score';
import { useOpenPopup } from '../Hooks/useOpenPopup';

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

	const { search } = useSelector((state) => state.search.search);

	return (
		<>
			<MainContainer>
				<Score {...openedPopup}></Score>
				<Container>
					<Input
						type="text"
						ref={busqueda}
						onKeyUp={enterHandler}
					></Input>
					<Button onClick={handleSubmit}>Buscar</Button>
				</Container>
				<ListadoCards>
					{search?.map((item) => (
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
	max-width: 1500px;
	justify-content: center;
	align-items: center;
	padding: 30px 0px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	margin: 10px 20px;
	padding: 10px;
	border: none;
	border-radius: 4px;
	width: 250px;
`;

const ListadoCards = styled.div`
	display: grid;
	/* grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */
	grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
	margin: 50px 0px;
	gap: 20px;
	width: 1500px;
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
