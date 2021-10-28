
import React from 'react'

import img_opc1 from '../../data/img/categorias/mujer/pantalones.jpg'

export const OpcIndividual = ( { element } ) => {

    return (

        <div className="OpcIndividual">
            <div className="OpcIndividual__img">
                <img className="img_categorias" src={ element.img } ></img>
            </div>
            <h5> { element.nombreCat } </h5>
        </div>
    )
}


