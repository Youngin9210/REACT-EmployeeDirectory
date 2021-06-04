import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({ columns, onSort, sortedColumn, sortedList }) => {
	return (
		<table className="table">
			<TableHeader
				columns={columns}
				onSort={onSort}
				sortedColumn={sortedColumn}
			/>
			<TableBody sortedList={sortedList} />
		</table>
	);
};

export default Table;
