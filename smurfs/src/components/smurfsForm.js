import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

const SmurfsForm = (props) => {
	const [ smurf, setSmurf ] = useState([ { name: '', age: '', height: '', id: Date.now() } ]);

	const handleChanges = (e) => {
		e.preventDefault();
		setSmurf({
			...smurf,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div>
			<input type="text" name="name" value={smurf.name} onChange={handleChanges} placeholder="Add name" />
			<input type="text" name="age" value={smurf.age} onChange={handleChanges} placeholder="Add age" />
			<input type="text" name="height" value={smurf.height} onChange={handleChanges} placeholder="Add height" />
			<button onClick={() => props.addSmurf(smurf)}>Add Smurf!</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { state };
};

export default connect(mapStateToProps, { addSmurf })(SmurfsForm);
