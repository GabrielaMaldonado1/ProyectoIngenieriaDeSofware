import { types } from "../types/types";

export const login = (uid, email) => ({
    type: types.login,
    payload: {
        uid,
        email
    }
})