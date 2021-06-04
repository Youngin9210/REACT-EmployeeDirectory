import _ from 'lodash';
import React, { Component } from 'react';
import API from '../utils/API';
import EmployeeTable from './common/EmployeeTable';
import Search from './Search';

class Employees extends Component {
	state = {
		result: [],
		sortedColumn: { path: 'name.first', order: 'asc' },
		searchQuery: '',
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

	handleSearch = (e) => {
		this.setState({ searchQuery: e.target.value });
		// console.log(e.target.value);
	};

	getTableData = () => {
		const { result, sortedColumn, searchQuery } = this.state;

		let filtered = result.filter((e) => {
			if (searchQuery === '') return e;
			if (e.name.first.toLowerCase().includes(searchQuery.toLowerCase()))
				return e;
			if (e.name.last.toLowerCase().includes(searchQuery.toLowerCase()))
				return e;
		});

		const sortedList = _.orderBy(
			filtered,
			[sortedColumn.path],
			[sortedColumn.order]
		);
		return { sortedList };
	};

	render() {
		const { sortedColumn } = this.state;
		const { sortedList } = this.getTableData();
		return (
			<React.Fragment>
				<Search onChange={this.handleSearch} />
				<EmployeeTable
					onSort={this.handleSort}
					sortedList={sortedList}
					sortedColumn={sortedColumn}
				/>
			</React.Fragment>
		);
	}
}

export default Employees;
