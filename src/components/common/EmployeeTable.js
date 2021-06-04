import React, { Component } from 'react';
import Table from './Table';

class EmployeeTable extends Component {
	columns = [
		{ path: 'name.first', label: 'First Name' },
		{ path: 'name.last', label: 'Last Name' },
		{ path: 'email', label: 'Email' },
		{ path: 'location', label: 'Location' },
		{ path: 'cell', label: 'Cell' },
	];
	render() {
		const { onSort, sortedColumn, sortedList } = this.props;
		return (
			<Table
				columns={this.columns}
				onSort={onSort}
				sortedColumn={sortedColumn}
				sortedList={sortedList}
			/>
		);
	}
}

export default EmployeeTable;
