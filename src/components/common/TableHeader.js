import React, { Component } from 'react';

class TableHeader extends Component {
	sortColumn = (path) => {
		const sortedColumn = { ...this.props.sortedColumn };
		console.log('sortedColumn', sortedColumn);
		console.log('sortedColumn.path', sortedColumn.path);
		console.log('path', path);
		if (sortedColumn.path === path && sortedColumn.path !== undefined) {
			console.log('true');
			sortedColumn.order = sortedColumn.order === 'asc' ? 'desc' : 'asc';
		} else {
			sortedColumn.path = path;
			sortedColumn.order = 'asc';
		}

		this.props.onSort(sortedColumn);
	};

	render() {
		const { columns } = this.props;
		return (
			<thead>
				<tr>
					<th className="text-center">Image</th>
					{columns.map((column) => (
						<th
							className="clickable text-center"
							key={column.label}
							onClick={() => this.sortColumn(column.path)}
						>
							{column.label}
						</th>
					))}
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
