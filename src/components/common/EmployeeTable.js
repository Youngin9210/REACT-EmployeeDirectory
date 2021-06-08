import React, { Component } from 'react';
import Table from './Table';

class EmployeeTable extends Component {
	// defining columns prop
	columns = [
		{ path: 'name.first', label: 'Name' },
		{ path: 'email', label: 'Email' },
		{ path: 'location.city', label: 'Location' },
		{ path: 'cell', label: 'Cell' },
	];
	render() {
		// destructuring props
		const { onSort, sortedColumn, sortedList, getTableData } = this.props;
		return (
			// returning table component and passing through props
			<Table
				columns={this.columns}
				onSort={onSort}
				sortedColumn={sortedColumn}
				sortedList={sortedList}
				getTableData={getTableData}
			/>
		);
	}
}

export default EmployeeTable;
