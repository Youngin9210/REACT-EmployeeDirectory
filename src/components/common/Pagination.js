/* eslint-disable jsx-a11y/anchor-is-valid */
import _ from 'lodash';
import React from 'react';

const Pagination = ({ employeeCount, pageSize, onPageChange, currentPage }) => {
	// rounding employeeCount / pageSize to the next largest integer and setting into a variable
	const pagesCount = Math.ceil(employeeCount / pageSize);
	// if pages count is 1 then return null
	if (pagesCount === 1) return null;
	// using lodash.range(start, end) method create an array of pages
	const pages = _.range(1, pagesCount + 1);

	// returning pagination nav with page number links
	return (
		<nav className="d-flex justify-content-center">
			<ul className="pagination">
				{pages.map((p) => {
					return (
						<li
							key={p}
							// dynamically setting className depending on current page
							className={
								p === currentPage ? 'page-item m-1 active' : 'page-item m-1'
							}
						>
							<a
								className="page-link clickable"
								onClick={() => onPageChange(p)}
							>
								{p}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Pagination;
