import React, { Component } from 'react';
// importing react-rounded-image npm package for image styling
import ReactRoundedImage from 'react-rounded-image';

class TableBody extends Component {
	render() {
		// destructuring
		const { sortedList } = this.props;
		return (
			// returning table body contents
			<tbody>
				{/* looping through sortedList to render table data */}
				{sortedList.map((e) => {
					return (
						// returning employee data
						<tr key={e.id.value} className="text-center align-middle">
							<td>
								{/* using react-rounded-image npm package to render image as a round image */}
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
							<td>{`${e.location.city}, ${e.location.state}`}</td>
							<td>{e.cell}</td>
						</tr>
					);
				})}
			</tbody>
		);
	}
}

export default TableBody;
