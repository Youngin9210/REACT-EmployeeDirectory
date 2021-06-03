import React, { Component } from 'react';
import API from '../utils/API';
import TableBody from './common/TableBody';
import TableHeader from './common/TableHeader';

class EmployeeTable extends Component {
	state = {
		result: [],
		columns: ['Image', 'Name', 'Email', 'Location', 'Cell'],
	};

	componentDidMount() {
		this.getEmployee();
	}

	getEmployee = () => {
		API.getUser()
			.then((res) => this.setState({ result: res.data.results }))
			.catch((err) => console.log(err.message));
	};

	render() {
		const { result, columns } = this.state;
		return (
			<table className="table">
				<TableHeader columns={columns} />
				<TableBody result={result} />
			</table>
		);
	}
}

export default EmployeeTable;
