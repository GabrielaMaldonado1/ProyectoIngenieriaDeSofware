import React from 'react'
import img from "../../data/img/categorias/CategoriasGeneral/mujer/CAMISETAS_CATG.png";

export const SeccionInvidualOpc = ( { element } ) => {
    return (
        <div className="Opc__seccion">
            <img className="Opc__seccion__img" src={ element.img} alt={element.nombreCat}></img>
        </div>
    )
}
