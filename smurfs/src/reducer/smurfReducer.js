import { FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAILURE } from '../actions';

const initialState = {
	smurf: [
		{
			name: '',
			age: '',
			id: Date.now()
		}
	],
	isFetching: false,
	error: ''
};

export const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_SMURF_START:
			return {
				...state,
				isFetching: true,
				error: ''
			};
		case FETCHING_SMURF_SUCCESS:
			return {
				...state,
				isFetching: false,
				smurf: action.payload,
				error: ''
			};
		case FETCHING_SMURF_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		default:
			return state;
	}
};
