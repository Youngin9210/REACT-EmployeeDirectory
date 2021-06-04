import _ from 'lodash';
import React from 'react';

const Pagination = ({ employeeCount, pageSize, onPageChange, currentPage }) => {
	const pagesCount = Math.ceil(employeeCount / pageSize);
	if (pagesCount === 1) return null;
	const pages = _.range(1, pagesCount + 1);

	return (
		<nav className="d-flex justify-content-center">
			<ul className="pagination">
				{pages.map((p) => {
					return (
						<li
							key={p}
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
