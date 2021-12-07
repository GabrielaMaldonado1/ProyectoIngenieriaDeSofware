import { types } from "../types/types";


export const LoadingReducer = ( state = {}, action) => {

    switch (action.type) {
        case types.cargado:
            return {
                cargado: action.payload.cargado
                
            } 

        default:
            return{
                cargado: false
             };
    }

}