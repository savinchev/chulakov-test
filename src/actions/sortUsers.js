import { SORT_VALUE, SORT_ORDER } from './../types';

export const setSortValue = sortValue => ({
	type: SORT_VALUE,
	payload: sortValue
});

export const setSortOrder = sortOrder => ({
	type: SORT_ORDER,
	payload: sortOrder
});