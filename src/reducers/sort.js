import { SORT_ORDER, SORT_VALUE } from "../types"

const initialState = {
  sortValue: 'id',
  sortOrder: 'asc'
}

export const sort = (state = initialState, action) => {
  switch (action.type) {
    case SORT_VALUE:
      return {
        ...state,
        sortValue: action.payload
      }
    case SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload
      }
    default:
      return state;
  }
}