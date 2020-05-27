import { CHANGE_LANG } from "../types";

export const changeLang = bool => ({
    type: CHANGE_LANG,
    payload: bool
})