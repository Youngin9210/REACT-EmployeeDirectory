import _ from 'lodash';
import React, { Component } from 'react';
import API from '../utils/API';
import { paginate } from '../utils/paginate';
import EmployeeTable from './common/EmployeeTable';
import Pagination from './common/Pagination';
import Search from './Search';

class Employees extends Component {
	state = {
		result: [],
		sortedColumn: { path: 'name.first', order: 'asc' },
		searchQuery: '',
		currentPage: 1,
		pageSize: 10,
	};

	componentDidMount() {
		this.getEmployee();
	}

	getEmployee = () => {
		API.getUser()
			.then((res) => this.setState({ result: res.data.results }))
			.catch((err) => console.log(err.message));
	};

	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};

	handleSort = (sortedColumn) => {
		this.setState({ sortedColumn });
	};

	handleSearch = (e) => {
		this.setState({ searchQuery: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	getTableData = () => {
		const { result, sortedColumn, searchQuery, currentPage, pageSize } =
			this.state;

		let filtered = result.filter((e) => {
			if (searchQuery === '') return e;
			if (e.name.first.toLowerCase().includes(searchQuery.toLowerCase()))
				return e;
			if (e.name.last.toLowerCase().includes(searchQuery.toLowerCase()))
				return e;
		});

		const employees = paginate(filtered, currentPage, pageSize);

		const sortedList = _.orderBy(
			employees,
			[sortedColumn.path],
			[sortedColumn.order]
		);
		return { sortedList, filtered };
	};

	render() {
		const { sortedColumn, pageSize, currentPage } = this.state;
		const { sortedList, filtered } = this.getTableData();
		return (
			<React.Fragment>
				<Search onChange={this.handleSearch} onSubmit={this.handleSubmit} />
				<Pagination
					employeeCount={filtered.length}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={this.handlePageChange}
				/>
				<EmployeeTable
					onSort={this.handleSort}
					sortedList={sortedList}
					sortedColumn={sortedColumn}
				/>
				<Pagination
					employeeCount={filtered.length}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={this.handlePageChange}
				/>
			</React.Fragment>
		);
	}
}

export default Employees;
