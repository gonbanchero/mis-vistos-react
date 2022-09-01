import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { LogoutOutlined } from '@mui/icons-material';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../store/auth';
import { ActiveMenu } from '../store/menubar/menuSlice';

export const MenuBar = () => {
	const activeMenu = useSelector((state) => state.menu.activeMenu);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(startLogout());
	};

	const handleChange = (event, newValue) => {
		dispatch(ActiveMenu(newValue));
	};

	return (
		<BottomNavigation
			value={activeMenu}
			onChange={handleChange}
			sx={{
				position: 'fixed',
				bottom: 0,
				left: 0,
				right: 0,
				backgroundColor: '#2b313c',
				borderTop: '1px solid #0A1928',
				boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.75)',
			}}
		>
			<BottomNavigationAction
				label="Movies"
				value="movies"
				icon={<MovieIcon />}
			/>
			<BottomNavigationAction
				label="Series"
				value="series"
				icon={<LiveTvIcon />}
			/>
			<BottomNavigationAction
				label="Add New"
				value="addnew"
				icon={<AddCircleIcon />}
				// onClick={() => {
				// 	navigate('/search');
				// }}
			/>
			<BottomNavigationAction
				label="Log Out"
				value="logout"
				icon={<LogoutOutlined />}
				onClick={onLogout}
			/>
		</BottomNavigation>
	);
};
