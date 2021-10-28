import { OpcIndividual } from './OpcIndividual';
import React, { useEffect, useState } from "react";

import dbCategoria from "../../data/pruebaCategforia";

import "../../css/categorias.css";

export const OpcCategorias = () => {
    
    const [productos, SetProductos] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(() => {
        if (update) {
            //crea la funcion que llamara los datos
            const respuesta = dbCategoria;
            SetProductos(respuesta);
            setUpdate(false);
        };
    }, [update]);

    return (
        <div className="OpcCategorias">
           
               {productos.map((producto, index) =>
                <OpcIndividual key={index} element={producto} />
            )}
            
        </div>
    )
}
export default OpcCategorias;


/*  */
