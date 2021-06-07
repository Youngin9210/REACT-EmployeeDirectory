import React, { Component } from 'react';
import ReactRoundedImage from 'react-rounded-image';

class TableBody extends Component {
	state = {};
	render() {
		const { sortedList } = this.props;
		return (
			<tbody>
				{sortedList.map((e) => {
					let location = `${e.location.city}, ${e.location.state}`;
					return (
						<tr key={e.id.value} className="text-center align-middle">
							<td>
								<ReactRoundedImage
									image={e.picture.large}
									roundedSize="8"
									roundedColor="#253d5b"
									imageWidth="80"
									imageHeight="80"
								/>
							</td>
							<td className="">
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
