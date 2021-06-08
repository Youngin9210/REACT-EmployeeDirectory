import React from 'react';
import SearchBox from './common/SearchBox';

const Search = ({ onChange, onSubmit }) => {
	// returning SearchBox component and passing through props
	return <SearchBox onChange={onChange} onSubmit={onSubmit} />;
};

export default Search;
