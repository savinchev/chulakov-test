import { TO_FAVOUR } from "../types";

export const toFavour = id => ({
    type: TO_FAVOUR,
    payload: id
})