import { FILTER_USERS } from './../types';

export const filterUsers = filterValue => ({
    type: FILTER_USERS,
    payload: filterValue
})