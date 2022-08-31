import { createSlice } from '@reduxjs/toolkit';
// import { handleViewedMovie } from '.';

export const viewSlice = createSlice({
	name: 'view',
	initialState: {
		views: [],
	},
	reducers: {
		ViewedMovie: (state, action) => {
			state.views.push(action.payload);
		},
		SetViewed: (state, action) => {
			state.views = action.payload;
		},
		ClearViewsLogout: (state) => {
			state.views = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const { ClearViewsLogout, ViewedMovie, SetViewed } = viewSlice.actions;
