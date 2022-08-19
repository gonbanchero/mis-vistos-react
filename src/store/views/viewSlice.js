import { createSlice } from '@reduxjs/toolkit';
import { handleViewedMovie } from '.';

export const viewSlice = createSlice({
	name: 'view',
	initialState: {
		views: [],
	},
	reducers: {
		viewsReducer: (state, action) => {
			state.views = handleViewedMovie(state.views, action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { viewsReducer } = viewSlice.actions;
