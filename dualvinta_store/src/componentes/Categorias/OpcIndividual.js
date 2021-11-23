
import React from 'react'
import { useHistory } from 'react-router';

export const OpcIndividual = ( { element, filtro } ) => {

    const history = useHistory();

    const filtrar = (e) => {
        e.preventDefault();
        history.push(`/resultadoOpcCategoria/${element.nombreCat}/${filtro}`);
    }

    return (

        <div className="OpcIndividual" onClick={filtrar}>
            <div className="OpcIndividual__img">
                <img className="img_categorias" src={ element.img } ></img>
            </div>
            <h5> { element.nombreCat } </h5>
        </div>
    )
}


