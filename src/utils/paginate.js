import _ from 'lodash';
export function paginate(items, pageNumber, pageSize) {
	const startIndex = (pageNumber - 1) * pageSize;
	// taking a number of items from an array
	return _(items).slice(startIndex).take(pageSize).value();
}
