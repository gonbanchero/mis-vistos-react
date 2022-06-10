import { SEARCH_MOVIE } from './search-actions';
import { searchForMovie } from './search-utils';

const INITIAL_STATE = {
	search: [],
};

const searchReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SEARCH_MOVIE:
			return {
				...state,
				search: searchForMovie(state.search, action.payload),
			};
		default:
			return state;
	}
};

export default searchReducer;
