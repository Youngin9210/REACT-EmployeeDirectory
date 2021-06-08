// importing lodash from lodash npm package
import _ from 'lodash';
import React, { Component } from 'react';
import API from '../utils/API';
import { paginate } from '../utils/paginate';
import EmployeeTable from './common/EmployeeTable';
import Pagination from './common/Pagination';
import Search from './Search';

// extending the React Component API
class Employees extends Component {
	// defining a state properties
	state = {
		result: [],
		sortedColumn: { path: 'name.first', order: 'asc' },
		searchQuery: '',
		currentPage: 1,
		pageSize: 10,
	};

	// After render calling a method to get data
	componentDidMount() {
		this.getEmployee();
	}

	// getting employee data from API using axios in utils/API
	getEmployee = () => {
		API.getUser()
			// setting state property result to equal API results
			.then((res) => this.setState({ result: res.data.results }))
			.catch((err) => console.log(err.message));
	};

	// on page change, set state of currentPage
	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};

	// on sort change, set state of sortedColumn
	handleSort = (sortedColumn) => {
		this.setState({ sortedColumn });
	};

	// on search change, set state of searchQuery
	handleSearch = (e) => {
		this.setState({ searchQuery: e.target.value });
	};

	// on submit, prevent default action. Disabling submit on search input form
	handleSubmit = (e) => {
		e.preventDefault();
	};

	// getting table data
	getTableData = () => {
		// destructing this.state
		const { result, sortedColumn, searchQuery, currentPage, pageSize } =
			this.state;

		// setting variable for an ordered list of result using lodash(_)'s .orderBy() method
		const orderedResult = _.orderBy(
			result,
			[sortedColumn.path],
			[sortedColumn.order]
		);

		// filtering table data based on searchQuery value
		let filtered = orderedResult.filter((e) => {
			if (searchQuery === '') return e;
			if (e.name.first.toLowerCase().includes(searchQuery.toLowerCase()))
				return e;
			if (e.name.last.toLowerCase().includes(searchQuery.toLowerCase()))
				return e;
			if (e.location.city.toLowerCase().includes(searchQuery.toLowerCase()))
				return e;
			if (e.location.state.toLowerCase().includes(searchQuery.toLowerCase()))
				return e;
			if (e.cell.toLowerCase().includes(searchQuery.toLowerCase())) return e;
			else {
				return null;
			}
		});

		// paginating table data using paginate function in utils/API
		const employees = paginate(filtered, currentPage, pageSize);

		// sorting paginated data
		const sortedList = _.orderBy(
			employees,
			[sortedColumn.path],
			[sortedColumn.order]
		);
		return { sortedList, filtered };
	};

	render() {
		// destructuring this.state
		const { sortedColumn, pageSize, currentPage } = this.state;
		// destructuring returned object of this.getTableData()
		const { sortedList, filtered } = this.getTableData();
		return (
			// Rendering child components and passing through props to those components to be used
			<React.Fragment>
				<Search onChange={this.handleSearch} onSubmit={this.handleSubmit} />
				<p className="text-center">
					** Sort columns in ascending or descending order by clicking name,
					email, location(by city), or cell. **
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
