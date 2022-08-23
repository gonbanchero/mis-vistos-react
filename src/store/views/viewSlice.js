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
			// state.views = handleViewedMovie(state.views, action.payload);
		},
		SetViewed: (state, action) => {
			state.views = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { ViewedMovie, SetViewed } = viewSlice.actions;
