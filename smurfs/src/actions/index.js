import axios from 'axios';

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';

export const LOADING = 'LOADING';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';

export const getSmurfs = () => (dispatch) => {
	dispatch({ type: FETCHING_SMURF_START });

	axios
		.get('http://localhost:3333/smurfs')
		.then((res) => {
			console.log('res', res);

			dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.log('err', err);
			dispatch({
				type: FETCHING_SMURF_FAILURE,
				payload: err
			});
		});
};

export const addSmurf = (smurf) => (dispatch) => {
	dispatch({ type: LOADING });
	console.log('smurf to add', smurf);
	axios
		.post('http://localhost:3333/smurfs', smurf)
		.then((res) => {
			dispatch({ type: ADD_SMURF, payload: res.data });
			// dispatch({ type: ERROR });
		})
		.catch((err) => {
			dispatch({ type: ERROR });
		});
};
