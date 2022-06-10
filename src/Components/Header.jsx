import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import styled from 'styled-components';
import { headerBackground, primary } from '../Styles/Colors';
import { Link } from 'react-router-dom';
import { ReactComponent as PlusIcon } from '../img/add_icon.svg';
import { ReactComponent as HomeIcon } from '../img/home.svg';

export const Header = () => {
	// const { setAlias, views } = useContext(Contexto);

	// const [open, setOpen] = React.useState(false);
	// const handleOpen = () => setOpen(true);
	// const handleClose = () => setOpen(false);
	// const navigate = useNavigate();

	// const busqueda = useRef();

	// const handleSubmit = () => {
	// 	setAlias(busqueda.current.value);
	// 	navigate('/agregar');
	// 	handleClose();
	// };

	// const enterHandler = (e) => {
	// 	if (e.key === 'Enter' || e.keyCode === 13) handleSubmit();
	// };

	const thisLocation = useLocation();

	return (
		<MainContainer>
			<MainHeader>
				<Link to="/">
					<Titulo>Mis Vistos</Titulo>
				</Link>
				<Icon>
					{thisLocation.pathname === '/' ? (
						<PlusIcon
							style={{ fill: '#7DDFEE', cursor: 'pointer' }}

							// onClick={() => {
							// 	if (views.length === 0) {
							// 		handleOpen();
							// 	} else navigate('/agregar');
							// }}
						></PlusIcon>
					) : (
						<HomeIcon
							style={{ fill: '#7DDFEE', cursor: 'pointer' }}

							// onClick={() => {
							// 	navigate('/');
							// }}
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
`;

const MainHeader = styled.div`
	width: 1400px;
	max-width: 1400px;
	display: flex;
	justify-items: center;
	justify-content: space-between;
`;

const Titulo = styled.h1`
	font-size: 2.2rem;
	text-decoration: none;
	color: #fff;
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
`;

{
	/* <Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
							align="center"
						>
							¿Qué alias le vas a poner a tus puntajes? (por
							ejemplo "pepitos")
						</Typography>
						<Div>
							<Input
								type="text"
								ref={busqueda}
								onKeyUp={enterHandler}
							></Input>
							<Button onClick={handleSubmit}>Agregar</Button>
						</Div>
						{/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula.
                </Typography> 
					</Box>
				</Modal> */
}
