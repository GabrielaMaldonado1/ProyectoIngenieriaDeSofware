
import { useEffect, useState } from 'react';
import { BuscarCateoria } from './UseAxiosGets';

export const UseAxiosCategoria = ( category ) => {
    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {
    
           BuscarCateoria( category ).then((response) => {
           
                setstate({
                    data: response,
                    loading: false
                })
    
            })
            .catch((error) => {
                console.log(error);
            });
                
       
    }, [ category])

    

    return state;
}
