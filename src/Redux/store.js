import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistStore from 'redux-persist/es/persistStore';

import rootReducer from './root-reducer';

const initialState = {};
const middleWare = [];

export const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleWare))
);

export const persistor = persistStore(store);
