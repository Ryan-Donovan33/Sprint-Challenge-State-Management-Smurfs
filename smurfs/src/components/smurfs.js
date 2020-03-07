import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

const Smurfs = () => {
	if (isFetching) {
		return <h2> Finding the smurfs!</h2>;
	}
	return (
		<div>
			<div> Smurfs</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		smurf: state.smurf,
		isFetching: state.isFetching,
		error: state.error
	};
};

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
