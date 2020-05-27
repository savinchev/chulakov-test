import { CHANGE_LANG } from "../types";

const initialState = {
    isEng: false
}

export const lang = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANG:
            return {
                ...state,
                isEng: action.payload
            }
        default:
            return state;
    }
}