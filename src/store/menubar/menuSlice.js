import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		activeMenu: 'movies',
	},
	reducers: {
		ActiveMenu: (state, action) => {
			state.activeMenu = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { ActiveMenu } = menuSlice.actions;
