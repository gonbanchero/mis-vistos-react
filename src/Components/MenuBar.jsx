import { useState } from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction';
import { LogoutOutlined } from '@mui/icons-material';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { styled } from '@mui/material/styles';

import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../store/auth';
import { ActiveMenu } from '../store/menubar/menuSlice';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color: #eeeeee;
  &.Mui-selected {
    color: #2276D2;
  }
`);

//MODAL STYLE
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: '#121212',
	color: '#eeeeee',
	border: '2px solid #eeeeee',
	boxShadow: 24,
	p: 4,
};

export const MenuBar = () => {
	const activeMenu = useSelector((state) => state.menu.activeMenu);

	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(startLogout());
	};

	const handleChange = (event, newValue) => {
		dispatch(ActiveMenu(newValue));
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Modal
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
						textAlign="center"
					>
						¿Quieres cerrar sesión?
					</Typography>
					<Typography
						id="modal-modal-description"
						sx={{ mt: 2, textAlign: 'center' }}
					>
						No te preocupes, tus vistos se guardarán para cuando
						regreses.
					</Typography>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							marginTop: '15px',
						}}
					>
						<Button onClick={onLogout}>Si, cerrar</Button>
						<Button onClick={handleClose}>No, quedarme</Button>
					</div>
				</Box>
			</Modal>
			<BottomNavigation
				value={activeMenu}
				onChange={handleChange}
				sx={{
					position: 'fixed',
					bottom: 0,
					left: 0,
					right: 0,
					backgroundColor: '#0A1928',
					borderTop: '1px solid #0A1928',
					boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.75)',
				}}
				showLabels
			>
				<BottomNavigationAction
					label="Películas"
					value="movies"
					icon={<MovieIcon />}
				/>
				<BottomNavigationAction
					label="Series"
					value="series"
					icon={<LiveTvIcon />}
					sx={{}}
				/>
				<BottomNavigationAction
					label="Add New"
					value="addnew"
					icon={<AddCircleIcon />}
				/>
				{/* <BottomNavigationAction
				label="Log Out"
				value="logout"
				icon={<LogoutOutlined />}
				onClick={onLogout}
			/> */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						minWidth: '80px',
						maxWidth: '168px',
						padding: '0 12px',
						cursor: 'pointer',
					}}
					onClick={handleOpen}
				>
					<LogoutOutlined
						sx={{ color: '#eeeeee' }}
						fontSize="medium"
					/>
					<p
						style={{
							margin: '0',
							fontSize: '0.75rem',
							color: '#eeeeee',
						}}
					>
						Log Out
					</p>
				</div>
			</BottomNavigation>
		</>
	);
};
