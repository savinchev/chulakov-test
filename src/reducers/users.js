import { SET_USERS, TO_FAVOUR } from './../types';

const initialState = {
    users: []
}

export const users = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case TO_FAVOUR:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}