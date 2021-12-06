import { types } from "../types/types";


export const CarroReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.carroCompra:
            return {
                data: action.payload.data,
            }
    
        default:
            return state;
    }

}