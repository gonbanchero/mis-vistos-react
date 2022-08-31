import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
	name: 'search',
	initialState: {
		search: [],
	},
	reducers: {
		searchMovie: (state, { payload }) => {
			state.search = payload;
		},
		ClearSearchLogout: (state) => {
			state.search = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const { ClearSearchLogout, searchMovie } = searchSlice.actions;
