import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { headerBackground, primary } from '../Styles/Colors';
import { Link } from 'react-router-dom';
import PlusIconImg from '../img/add_icon.svg';
import HomeIconImg from '../img/home.svg';
import LogoImg from '../img/LogoMV.png';
import { devices } from '../Styles/breakpoints/responsive';

export const Header = () => {
	const navigate = useNavigate();
	const thisLocation = useLocation();

	return (
		<MainContainer>
			<MainHeader>
				<Link to="/">
					<Logo src={LogoImg} />
				</Link>
				<Icon>
					{thisLocation.pathname === '/' ? (
						<PlusIcon
							src={PlusIconImg}
							onClick={() => {
								navigate('/search');
							}}
						></PlusIcon>
					) : (
						<HomeIcon
							src={HomeIconImg}
							onClick={() => {
								navigate('/');
							}}
						></HomeIcon>
					)}
				</Icon>
			</MainHeader>
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

const MainHeader = styled.div`
	width: 1400px;
	max-width: 1400px;
	display: flex;
	justify-items: center;
	justify-content: space-between;

	@media ${devices.laptopL} {
		width: 1000px;
	}
	@media ${devices.laptop} {
		width: 700px;
	}
	@media ${devices.tablet} {
		width: 100%;
		display: flex;
		justify-content: center;
	}
`;

const Logo = styled.img`
	width: 150px;
	@media ${devices.tablet} {
		width: 120px;
	}
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
`;

export const PlusIcon = styled.img`
	cursor: pointer;
	@media ${devices.tablet} {
		display: none;
	}
`;

const HomeIcon = styled.img`
	cursor: pointer;
	@media ${devices.tablet} {
		display: none;
	}
`;
