import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class SmurfsForm extends React.Component {
	state = {
		smurf: ''
	};

	handleChanges = (e) => {
		this.setState({ smurf: e.target.value });
	};

	render() {
		return (
			<React.Fragment>
				<div>
					{this.props.newSmurf.map((member, index) => (
						<h4 key={index}>
							{member.name}
							{member.age}
						</h4>
					))}
					<input type="text" value={this.state.smurf} onChange={this.handleChanges} placeholder="Add smurf" />
					<button onClick={() => this.props.addSmurf(this.state.smurf)}>Add Smurf!</button>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		newSmurf: state.formReducer.newSmurf
	};
};

export default connect(mapStateToProps, { addSmurf })(SmurfsForm);
