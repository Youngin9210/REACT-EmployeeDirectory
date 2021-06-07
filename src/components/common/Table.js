import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({ columns, onSort, sortedColumn, sortedList, getTableData }) => {
	return (
		<table className="table table-responsive">
			<TableHeader
				columns={columns}
				onSort={onSort}
				sortedColumn={sortedColumn}
				getTableData={getTableData}
			/>
			<TableBody sortedList={sortedList} />
		</table>
	);
};

export default Table;
