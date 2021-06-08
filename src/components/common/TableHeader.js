import React, { Component } from 'react';

class TableHeader extends Component {
	// method to sort table columns
	sortColumn = (path) => {
		// setting nested prop object 'sortedColumn' into a variable
		const sortedColumn = { ...this.props.sortedColumn };
		// if sortedColumn.path = path argument AND doesn not = undefined,
		if (sortedColumn.path === path && sortedColumn.path !== undefined) {
			// then, set sortedColumn.order accordingly
			sortedColumn.order = sortedColumn.order === 'asc' ? 'desc' : 'asc';
		} else {
			// otherwise, set sortedColumn.path to path argument and sortedColumn.order to 'asc' (ascending)
			sortedColumn.path = path;
			sortedColumn.order = 'asc';
		}

		// calling onSort prop to sort
		this.props.onSort(sortedColumn);
	};

	// method to render a sort icon next to column title if column is sorted
	renderSortIcon = (column) => {
		// destructuring
		const { sortedColumn } = this.props;
		// returning null if column.path = sortedColumn.path
		if (column.path !== sortedColumn.path) return null;
		// otherwise return font-awesome icon if sortedColumn.order = ascending
		if (sortedColumn.order === 'asc') return <i className="fa fa-sort-up"></i>;
		return <i className="fa fa-sort-down"></i>;
	};

	render() {
		// destructuring
		const { columns, getTableData } = this.props;
		return (
			// returning table header
			<thead>
				<tr className="tableHeader">
					<th className="text-center">Image</th>
					{/* mapping columns to loop through and return data in each column */}
					{columns.map((column) => (
						<th
							className="clickable text-center w-auto"
							key={column.label}
							// clicking column title will sort by column and get new table data with sorted data
							onClick={() => {
								this.sortColumn(column.path);
								getTableData();
							}}
						>
							{/* rendering sort icon next to column title */}
							{column.label} {this.renderSortIcon(column)}
						</th>
					))}
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
