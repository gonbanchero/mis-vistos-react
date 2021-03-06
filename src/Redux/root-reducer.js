import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { searchReducer } from './Search/search-reducer';
import { viewsReducer } from './Views/views-reducer';

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['views'],
};

const rootReducer = combineReducers({
	search: searchReducer,
	views: viewsReducer,
});

export default persistReducer(persistConfig, rootReducer);
