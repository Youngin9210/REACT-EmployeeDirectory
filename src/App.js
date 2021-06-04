import React from 'react';
import Employees from './components/Employees';
import NavBar from './components/NavBar';

const App = () => {
	return (
		<React.Fragment>
			<NavBar />
			<main className="container">
				<Employees />
			</main>
		</React.Fragment>
	);
};

export default App;
