// importing lodash library
import _ from 'lodash';
// paginating data
export function paginate(items, pageNumber, pageSize) {
	const startIndex = (pageNumber - 1) * pageSize;
	// taking a number of items from an array and returning the number of items based on the pageSize
	return _(items).slice(startIndex).take(pageSize).value();
}
