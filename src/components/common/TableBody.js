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
						<tr key={e.id.value}>
							<td className="text-center">
								<img src={e.picture.thumbnail} alt="" />
							</td>
							<td className="text-center">{e.name.first}</td>
							<td className="text-center">{e.name.last}</td>
							<td className="text-center">{e.email}</td>
							<td className="text-center">{location}</td>
							<td className="text-center">{e.cell}</td>
						</tr>
					);
				})}
			</tbody>
		);
	}
}

export default TableBody;
