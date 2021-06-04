import React from 'react';

const SearchBox = ({ onChange }) => {
	return (
		<form action="" className="d-flex m-auto my-4 col-md-6">
			<input
				className="form-control me-2"
				type="search"
				placeholder="Search by first or last name"
				onChange={onChange}
			/>
			{/* <button className="btn btn-outline-success" type="submit">
				Search
			</button> */}
		</form>
	);
};

export default SearchBox;
