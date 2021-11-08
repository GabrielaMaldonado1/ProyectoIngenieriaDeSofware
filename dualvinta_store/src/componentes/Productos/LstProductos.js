import React, { useEffect, useState } from "react";
import ViewProducto from "./ViewProducto";

import "../../css/vendor/bootstrap/css/bootstrap.min.css";
import "../../css/pages.css";
import { searchByName } from "../../data/PruebaProductos";

const LstProductos = ({ titulo, productoArray }) => {

    const [productos, SetProductos] = useState( [] );
    const [update, setUpdate] = useState(true);

   // console.log(productoArray);

    if( productoArray !== undefined){
        const respuesta = productoArray;
            SetProductos(respuesta);
            setUpdate(false);
    }else{
        
    }

    useEffect(() => {
        if (update) {
            //crea la funcion que llamara los datos
            const respuesta = productoArray;
            SetProductos(respuesta);
            setUpdate(false);
        };
    }, [update]);

    function search(e){
        if(e.target.value === ""){
            setUpdate(true);
        };
        const t = searchByName(productos, e.target.value);
        SetProductos(t);
    }

    return (
        <div className="container-fluid rounded shadow-sm nuevo_home">
            <div className="row">
                <div className="col-md-8 py-3">
                    <h3 className="Titulo_home"><b>{titulo}</b></h3>
                </div>
                <div className="col-md-4 py-3">
                    <input className="form-control search_secciones_home" placeholder="Busqueda" onChange={search} />
                </div>
            </div>
            <hr style={{ backgroundColor: "#F5DA81" }} />
            <div className="row" style={{}}>
                {productos.map((producto, index) =>
                    <ViewProducto key={index} element={producto} />
                )}
            </div>
        </div>

    )
};


export default LstProductos;
