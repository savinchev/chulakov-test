import { combineReducers } from 'redux'
import { lang } from './lang';
import { users } from './users';
import { sort } from './sort';
import { filter } from './filter';



export const rootReducer = combineReducers({
    lang,
    users,
    sort,
    filter
})