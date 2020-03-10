import { combineReducers } from 'redux';

import { smurfReducer } from './smurfReducer';
import { formReducer } from './formReducer';

export const reducer = combineReducers({
	smurfReducer,
	formReducer
});
