import React from 'react'
import img from "../../data/img/categorias/CategoriasGeneral/mujer/CAMISETAS_CATG.png";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import { useHistory } from 'react-router';

export const SeccionInvidualOpc = ( { element } ) => {
    

    
    return (
        <div className="Opc__seccion">
            <Link to={`/resultadoOpcCategoria/${element.nombreCat}/Ropa%20Femenina`}> <img className="Opc__seccion__img" src={ element.img} alt={element.nombreCat}></img> </Link>
        </div>
    )
}
