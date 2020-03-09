import React, { Component, useState } from 'react';

import Smurfs from './smurfs';
import './App.css';

const App = () => {
	const [ smurfList, setSmurfList ] = useState([]);

	return (
		<div className="App">
			<h1>SMURFS! 2.0 W/ Redux</h1>
			<div>Welcome to your state management version of Smurfs!</div>
			<Smurfs />
		</div>
	);
};

export default App;
