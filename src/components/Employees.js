import _ from 'lodash';
import { Component } from 'react';
import API from '../utils/API';
import EmployeeTable from './common/EmployeeTable';

class Employees extends Component {
	state = {
		result: [],
		sortedColumn: { path: 'name.first', order: 'asc' },
	};

	componentDidMount() {
		this.getEmployee();
	}

	getEmployee = () => {
		API.getUser()
			.then((res) => this.setState({ result: res.data.results }))
			.catch((err) => console.log(err.message));
	};

	handleSort = (sortedColumn) => {
		this.setState({ sortedColumn });
	};

	getTableData = () => {
		const { result, sortedColumn } = this.state;
		const sortedList = _.orderBy(
			result,
			[sortedColumn.path],
			[sortedColumn.order]
		);
		console.log('sortedList', sortedList);
		return { sortedList };
	};

	render() {
		const { sortedColumn } = this.state;
		const { sortedList } = this.getTableData();
		return (
			<EmployeeTable
				onSort={this.handleSort}
				sortedList={sortedList}
				sortedColumn={sortedColumn}
			/>
		);
	}
}

export default Employees;
