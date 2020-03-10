import { ADD_SMURF } from '../actions';

const initialState = {
	smurfs: [
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
				smurfs: [ ...state.smurfs, newSmurf ]
			};
		default:
			return state;
	}
};
