import React from 'react';
// importing Employees and NavBar components
import Employees from './components/Employees';
import NavBar from './components/NavBar';

const App = () => {
	return (
		/* Returning jsx syntax to be rendered */
		<React.Fragment>
			{/* rendering NavBar and Employees components */}
			<NavBar />
			<main className="container">
				<Employees />
			</main>
		</React.Fragment>
	);
};

export default App;
