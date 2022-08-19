import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { searchSlice } from './search';
import { viewSlice } from './views/viewSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		search: searchSlice.reducer,
		views: viewSlice.reducer,
	},
});
