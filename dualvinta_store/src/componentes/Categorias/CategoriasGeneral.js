import React, { useEffect, useState } from 'react'
import { SeccionInvidualOpc } from './SeccionInvidualOpc'
import dbCategoriaMujer from '../../data/Arreglos/CategoriaMujer'

export const CategoriasGeneral = () => {
    
    const [productos, SetProductos] = useState([]);
    const [update, setUpdate] = useState(true);


    useEffect(() => {
        if (update) {
            //crea la funcion que llamara los datos
            const respuesta = dbCategoriaMujer;
            SetProductos(respuesta);
            setUpdate(false);
        };
    }, [update]);
    
    
    return (
        <div className="CategoriaArea">

            <div className="CategoriaArea__seccion">

                <div className="seccion__titulo">

                <div className="seccion__titulo__div"></div>
                <div className="seccion__titulo__titulo__div"><h5 className="seccion__titulo__titulo" >MUJERES</h5></div>
                <div className="seccion__titulo__div"></div>

                </div>

                <div className="seccion__opciones">

                     {productos.map((producto, index) =>
                        <SeccionInvidualOpc key={index} element={producto} />
                    )}
                    

                </div>


            </div>
            
        </div>
    )
}
