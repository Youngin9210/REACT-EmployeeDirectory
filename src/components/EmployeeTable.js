import React, { Component } from 'react';
import API from '../utils/API';

class EmployeeTable extends Component {
	state = {
		result: [],
		columns: ['Image', 'Name', 'Email', 'Location', 'Cell'],
	};

	componentDidMount() {
		this.getEmployee();
	}

	getEmployee = () => {
		API.getUser()
			.then((res) => this.setState({ result: res.data.results }))
			.catch((err) => console.log(err.message));
	};

	render() {
		const { result } = this.state;
		return (
			<table className="table">
				<thead>
					<tr>
						{this.state.columns.map((column) => (
							<th className="clickable text-center" key={column}>
								{column}
							</th>
						))}
					</tr>
				</thead>
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
			</table>
		);
	}
}

export default EmployeeTable;
