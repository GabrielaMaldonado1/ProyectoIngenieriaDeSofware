import React from 'react'
import img from "../../data/img/categorias/CategoriasGeneral/mujer/CAMISETAS_CATG.png";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export const SeccionInvidualOpc = ( { element } ) => {
    return (
        <div className="Opc__seccion">
            <Link to="/vestimenta"> <img className="Opc__seccion__img" src={ element.img} alt={element.nombreCat}></img> </Link>
        </div>
    )
}
