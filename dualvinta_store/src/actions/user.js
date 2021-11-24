import { GetUserId } from "../hooks/UseAxiosGets";
import { types } from "../types/types";

export const UserActiveLoggueado = ( uid ) =>{
    return (dispatch) => {
       GetUserId( uid ).then((response) => {
           
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