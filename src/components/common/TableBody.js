import React, { Component } from 'react';

class TableBody extends Component {
	state = {};
	render() {
		const { result } = this.props;
		return (
			<tbody>
				{result.map((e) => (
					<tr key={e.id.value}>
						<td className="text-center">
							<img src={e.picture.thumbnail} alt="" />
						</td>
						<td className="text-center">{`${e.name.first} ${e.name.last}`}</td>
						<td className="text-center">{e.email}</td>
						<td className="text-center">{`${e.location.city}, ${e.location.state}`}</td>
						<td className="text-center">{e.cell}</td>
					</tr>
				))}
			</tbody>
		);
	}
}

export default TableBody;
