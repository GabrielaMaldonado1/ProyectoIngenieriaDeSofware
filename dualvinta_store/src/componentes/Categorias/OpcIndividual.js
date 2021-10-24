import React from 'react'
import img_opc from '../../data/img/Productos/1.jpeg'
export const OpcIndividual = () => {
    return (
        <div className="OpcIndividual">
            <div className="OpcIndividual__img">
            <img className="img_categorias" src={img_opc} ></img>
            </div>
             <h3>Nombre</h3>
        </div>
    )
}
