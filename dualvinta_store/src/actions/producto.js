import { BuscarCateoria } from "../hooks/UseAxiosGets";
import { UseAxiosCategoria } from "../hooks/UseAxiosLimit"
import { types } from "../types/types"

export const showCategoriaProducto = ( categoria ) =>{
    return (dispatch) => {
       BuscarCateoria( categoria ).then((response) => {
           
           dispatch(showCategoria(response))     
    
            })
            .catch((error) => {
                console.log(error);
            });
                
    }
}

export const showCategoria = (  data  ) => {
    return {
        type: types.showcategoria,
        payload: {
            data: data
        }
    }
}

export const showAllProducto = () =>{
    return (dispatch) => {
       BuscarCateoria().then((response) => {
           
           dispatch(showCategoria(response))     
    
            })
            .catch((error) => {
                console.log(error);
            });
                
    }
}



export const showAll = ( data ) => {
    return {
        type: types.showall,
        payload: {
            data: data
        }
    }
}