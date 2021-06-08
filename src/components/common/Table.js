import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

// destructuring props
const Table = ({ columns, onSort, sortedColumn, sortedList, getTableData }) => {
	return (
		// returning table container and contents (TableHeader and TableBody) while passing through props
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
