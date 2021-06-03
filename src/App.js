import React from 'react';
import EmployeeTable from './components/EmployeeTable';
import NavBar from './components/NavBar';

const App = () => {
	return (
		<React.Fragment>
			<NavBar />
			<main className="container">
				<EmployeeTable />
			</main>
		</React.Fragment>
	);
};

export default App;
