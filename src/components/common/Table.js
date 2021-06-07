import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({ columns, onSort, sortedColumn, sortedList, getTableData }) => {
	return (
		<div className="table-responsive">
			<table className="table">
				<TableHeader
					columns={columns}
					onSort={onSort}
					sortedColumn={sortedColumn}
					getTableData={getTableData}
				/>
				<TableBody sortedList={sortedList} />
			</table>
		</div>
	);
};

export default Table;
