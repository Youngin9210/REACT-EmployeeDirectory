import React from 'react';

const SearchBox = ({ onChange, onSubmit }) => {
	return (
		<form action="" className="d-flex m-auto my-4 col-md-6" onSubmit={onSubmit}>
			<input
				className="form-control me-2"
				type="search"
				placeholder="Search by first or last name"
				onChange={onChange}
			/>
		</form>
	);
};

export default SearchBox;
