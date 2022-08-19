import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { headerBackground, primary } from '../Styles/Colors';
import { Link } from 'react-router-dom';
import PlusIconImg from '../img/add_icon.svg';
import HomeIconImg from '../img/home.svg';
import LogoImg from '../img/LogoMV.png';
import { devices } from '../Styles/breakpoints/responsive';
import { useCheckAuth } from '../Hooks/useCheckAuth';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { LogoutOutlined, AddCircle, Home } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../store/auth';

export const Header = () => {
	const navigate = useNavigate();
	const thisLocation = useLocation();
	const dispatch = useDispatch();

	const { status } = useCheckAuth();

	const onLogout = () => {
		dispatch(startLogout());
	};

	return (
		<MainContainer>
			<MainHeader>
				<Link to="/">
					<Logo src={LogoImg} />
				</Link>
				{status === 'authenticated' ? (
					<Buttons>
						<Icon>
							{thisLocation.pathname === '/' ? (
								<IconButton
									color="success"
									onClick={() => {
										navigate('/search');
									}}
								>
									<AddCircle fontSize="large" />
								</IconButton>
							) : (
								<IconButton
									color="success"
									onClick={() => {
										navigate('/');
									}}
								>
									<Home fontSize="large" />
								</IconButton>
							)}
						</Icon>
						<IconButton color="error" onClick={onLogout}>
							<LogoutOutlined fontSize="large" />
						</IconButton>
					</Buttons>
				) : (
					''
				)}
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

const Buttons = styled.div`
	display: flex;
	gap: 10px;
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

// export const PlusIcon = styled.img`
// 	cursor: pointer;
// 	@media ${devices.tablet} {
// 		display: none;
// 	}
// `;

// const HomeIcon = styled.img`
// 	cursor: pointer;
// 	@media ${devices.tablet} {
// 		display: none;
// 	}
// `;
