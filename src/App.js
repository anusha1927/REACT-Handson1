import './App.css';
import React, { useState } from 'react';
import FunctionComponent from './Handson1/FunctionComponent';
import ClassComponent from './Handson1/ClassComponent';

function App() {
	const [functionState, setFState] = useState(false);
	const [classState, setCState] = useState(false);

	return (
		<>
			<h1 className="heading">Styling using Functional and Class Component</h1>
			<div className="buttons">
				<button onClick={() => setFState(!functionState)}>
					To see styling in functional component
				</button>
				<button onClick={() => setCState(!classState)}>
					To see styling in class component
				</button>
			</div>
			<div className="box">
				{functionState ? <FunctionComponent></FunctionComponent> : ''}
				{classState ? <ClassComponent /> : ''}
				{/* {fState && <FunctionComponent/>} */}
			</div>
		</>
	);
}

export default App;
