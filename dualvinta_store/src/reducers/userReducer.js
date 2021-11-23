import { types } from "../types/types";


export const UserReducer = ( state = {}, action) => {

    switch (action.type) {
        case types.userActivo:
            return {
                user: action.payload.user
            }
            
        case types.logout:
            return { }

        default:
            return state;
    }

}