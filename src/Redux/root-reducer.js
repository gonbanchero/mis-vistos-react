import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import viewsReducer from './Views/views-reducer';
import searchReducer from './Search/search-reducer';

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
	views: viewsReducer,
	search: searchReducer,
});

export default persistReducer(persistConfig, rootReducer);
