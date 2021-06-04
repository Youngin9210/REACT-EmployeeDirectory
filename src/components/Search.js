import React from 'react';
import SearchBox from './common/SearchBox';

const Search = ({ onChange, onSubmit }) => {
	return <SearchBox onChange={onChange} onSubmit={onSubmit} />;
};

export default Search;
