import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
	return (
		<FooterStyled>
			<FooterText>
				Realizado por Gon Banchero - {new Date().getFullYear()}
			</FooterText>
		</FooterStyled>
	);
};

const FooterStyled = styled.div`
	margin-top: 40px;
	width: 100%;
	background-color: #000;
	padding: 10px 0px;
	bottom: 0;
`;

const FooterText = styled.p`
	text-align: center;
	color: #fff;
	font-size: 12px;
`;
