import React from 'react';

import styled from 'styled-components';
import { headerBackground } from '../Styles/Colors';

import LogoImg from '../img/LogoMV.png';
import { devices } from '../Styles/breakpoints/responsive';

export const Header = () => {
	return (
		<MainContainer>
			<Logo src={LogoImg} />
		</MainContainer>
	);
};

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	width: 100%;
	background-color: ${headerBackground};
	padding: 20px 0px;
`;

const Logo = styled.img`
	width: 150px;
	@media ${devices.tablet} {
		width: 120px;
	}
`;
