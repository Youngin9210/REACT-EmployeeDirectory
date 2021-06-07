import React, { Component } from 'react';
import Table from './Table';

class EmployeeTable extends Component {
	columns = [
		{ path: 'name.first', label: 'Name' },
		{ path: 'email', label: 'Email' },
		{ path: 'location.city', label: 'Location' },
		{ path: 'cell', label: 'Cell' },
	];
	render() {
		const { onSort, sortedColumn, sortedList, getTableData } = this.props;
		return (
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
