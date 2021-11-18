import { types } from "../types/types";


export const ProductoReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.showcategoria:
            return {
                data: action.payload.data,
            }
    
        default:
            return state;
    }

}