import React from 'react';

const SearchBox = ({ onChange, onSubmit }) => {
	return (
		<form
			action=""
			className="d-flex flex-wrap justify-content-center m-auto my-4 col-md-6"
			onSubmit={onSubmit}
		>
			<p className="text-center">Search for an employee</p>
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
