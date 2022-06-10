import React from 'react';
import styled from 'styled-components';

export const Home = () => {
	return (
		<>
			<ListadoCards></ListadoCards>
		</>
	);
};

const ListadoCards = styled.div`
	display: grid;
	grid-template-columns: auto;
	margin: 10px 0px;
	gap: 7px;
	max-width: 1400px;
`;
