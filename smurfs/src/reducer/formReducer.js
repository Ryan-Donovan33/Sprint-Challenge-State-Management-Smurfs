import { LOADING, ADD_SMURF, ERROR } from '../actions';

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

export const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_SMURF:
			const newSmurf = { name: action.payload };
			return {
				...state,
				smurf: [ ...state.smurf, newSmurf ]
			};
		default:
			return state;
	}
};
