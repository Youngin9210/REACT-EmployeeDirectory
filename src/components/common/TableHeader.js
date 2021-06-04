import React, { Component } from 'react';

class TableHeader extends Component {
	sortColumn = (path) => {
		const sortedColumn = { ...this.props.sortedColumn };
		if (sortedColumn.path === path && sortedColumn.path !== undefined) {
			sortedColumn.order = sortedColumn.order === 'up' ? 'down' : 'up';
		} else {
			sortedColumn.path = path;
			sortedColumn.order = 'up';
		}

		this.props.onSort(sortedColumn);
	};

	renderSortIcon = (column) => {
		const { sortedColumn } = this.props;
		if (column.path !== sortedColumn.path) return null;
		if (sortedColumn.order === 'up') return <i className="fa fa-sort-up"></i>;
		return <i className="fa fa-sort-down"></i>;
	};

	render() {
		const { columns } = this.props;
		return (
			<thead>
				<tr className="tableHeader">
					<th className="text-center">Image</th>
					{columns.map((column) => (
						<th
							className="clickable text-center"
							key={column.label}
							onClick={() => this.sortColumn(column.path)}
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
