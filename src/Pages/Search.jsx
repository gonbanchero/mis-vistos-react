import React from 'react';
import styled from 'styled-components';
import { primary, secondary } from '../Styles/Colors';
import { useRef } from 'react';
import * as SearchActions from '../Redux/Search/search-actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const Search = () => {
	const dispatch = useDispatch();

	const enterHandler = (e) => {
		if (e.key === 'Enter' || e.keyCode === 13) handleSubmit();
	};

	const busqueda = useRef();

	const handleSubmit = () => {
		dispatch(SearchActions.searchMovie(busqueda.current.value));
	};

	const searchResults = useSelector((state) => state.search.search);
	console.log(searchResults);

	const pepe = searchResults.then((data) => {
		console.log(data);
	});

	return (
		<MainContainer>
			<Container>
				<Input
					type="text"
					ref={busqueda}
					onKeyUp={enterHandler}
				></Input>
				<Button onClick={handleSubmit}>Buscar</Button>
			</Container>
			<ListadoCards>
				{pepe.map((item) => (
					<div item={item} key={item.id}></div>
				))}
			</ListadoCards>
		</MainContainer>
	);
};

const MainContainer = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	max-width: 1400px;
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
	grid-template-columns: auto;
	margin: 15px 0px;
	gap: 5px;
	width: 1400px;
`;

const Button = styled.button`
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
