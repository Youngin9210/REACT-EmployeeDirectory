import React, { Component } from 'react';

class TableHeader extends Component {
	sortColumn = (path) => {
		const sortedColumn = { ...this.props.sortedColumn };
		if (sortedColumn.path === path && sortedColumn.path !== undefined) {
			sortedColumn.order = sortedColumn.order === 'asc' ? 'desc' : 'asc';
		} else {
			sortedColumn.path = path;
			sortedColumn.order = 'asc';
		}

		this.props.onSort(sortedColumn);
	};

	renderSortIcon = (column) => {
		const { sortedColumn } = this.props;
		if (column.path !== sortedColumn.path) return null;
		if (sortedColumn.order === 'asc') return <i className="fa fa-sort-up"></i>;
		return <i className="fa fa-sort-down"></i>;
	};

	render() {
		const { columns, getTableData } = this.props;
		return (
			<thead>
				<tr className="tableHeader">
					<th className="text-center">Image</th>
					{columns.map((column) => (
						<th
							className="clickable text-center w-auto"
							key={column.label}
							onClick={() => {
								this.sortColumn(column.path);
								getTableData();
							}}
						>
							{column.label} {this.renderSortIcon(column)}
						</th>
					))}
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
