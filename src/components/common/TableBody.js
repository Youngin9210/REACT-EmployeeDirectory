import React, { Component } from 'react';

class TableBody extends Component {
	state = {};
	render() {
		const { sortedList } = this.props;
		return (
			<tbody>
				{sortedList.map((e) => {
					let location = `${e.location.city}, ${e.location.state}`;
					return (
						<tr key={e.id.value} className="text-center">
							<td>
								<img src={e.picture.thumbnail} alt="" />
							</td>
							<td>
								{e.name.first} {e.name.last}
							</td>
							<td>{e.email}</td>
							<td>{location}</td>
							<td>{e.cell}</td>
						</tr>
					);
				})}
			</tbody>
		);
	}
}

export default TableBody;
