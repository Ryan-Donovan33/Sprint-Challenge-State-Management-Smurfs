import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

const Smurfs = ({ getSmurfs, smurf, isFetching, error }) => {
	if (isFetching) {
		return <h2> Finding the smurfs!</h2>;
	}
	return (
		<div>
			<div> Smurfs</div>
			<div>
				{' '}
				{smurf.map((el) => (
					<div key={el.id}>
						<p>{el.name}</p>
						<p>{el.age}</p>
					</div>
				))}
			</div>
			<button onClick={getSmurfs}>Find the Smurfs</button>
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
