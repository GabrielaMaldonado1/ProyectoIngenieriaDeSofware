<<<<<<< HEAD

import { OpcIndividual } from './OpcIndividual';
import React, { useEffect, useState } from "react";

import dbCategoria from "../../data/pruebaCategforia";

export const OpcCategorias = ({ img,nombreCat}) => {
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
        <div className="container-fluid rounded shadow-sm">
        <hr style={{ backgroundColor: "#F5DA81" }} />
        <div className="row"  style={{}}>
            {productos.map((producto, index) =>
                <OpcIndividual key={index} element={producto} />
            )}
        </div>
    </div>
    )
}
export default OpcCategorias;
=======
import React from 'react'
import { OpcIndividual } from './OpcIndividual'

export const OpcCategorias = () => {
    return (
        <div className="OpcCategorias">
       <OpcIndividual />
            
        </div>
    )
}
>>>>>>> 0f74cbed21fe7a42f2dffb9f72fd74f5614e23d1
