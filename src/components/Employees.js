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

		const orderedResult = _.orderBy(
			result,
			[sortedColumn.path],
			[sortedColumn.order]
		);

		let filtered = orderedResult.filter((e) => {
			switch (e) {
				case searchQuery === '':
					return e;
				case e.name.first.toLowerCase().includes(searchQuery.toLowerCase()):
					return e;
				case e.name.last.toLowerCase().includes(searchQuery.toLowerCase()):
					return e;
				case e.location.city.toLowerCase().includes(searchQuery.toLowerCase()):
					return e;
				case e.location.state.toLowerCase().includes(searchQuery.toLowerCase()):
					return e;
				default:
					return e;
			}
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
				<p className="text-center">
					**Sort columns in ascending or descending order by clicking first
					name, last name, email, location(by city), or cell.**
				</p>
				<EmployeeTable
					onSort={this.handleSort}
					sortedList={sortedList}
					sortedColumn={sortedColumn}
					getTableData={this.getTableData}
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
