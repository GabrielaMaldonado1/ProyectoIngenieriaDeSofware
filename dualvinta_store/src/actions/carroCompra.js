import { getCarroCompras } from "../hooks/UseAxiosGets";
import { UseAxiosCategoria } from "../hooks/UseAxiosLimit"
import { types } from "../types/types"

export const showCarroCompra = () => {
  
    return (dispatch) => {
        getCarroCompras().then((response) => {

            dispatch(showCarro(response))

        })
            .catch((error) => {
                console.log(error);
            });

    }
}

export const showCarro = (data) => {
    return {
        type: types.carroCompra,
        payload: {
            data: data
        }
    }
}
