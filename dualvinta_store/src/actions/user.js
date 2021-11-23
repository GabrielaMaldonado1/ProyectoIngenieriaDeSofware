import { GetUserId } from "../hooks/UseAxiosGets";
import { types } from "../types/types";

export const UserActiveLoggueado = ( id ) =>{
    return (dispatch) => {
       GetUserId( id ).then((response) => {
           
           dispatch(userStore(response))     
    
            })
            .catch((error) => {
                console.log(error);
            });
                
    }
}

export const userStore = ( data ) => {
    return {
        type: types.userActivo,
        payload: {
            user: data
        }
    }
}