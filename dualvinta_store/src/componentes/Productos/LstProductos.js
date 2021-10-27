import React, { useEffect, useState } from "react";
import ViewProducto from "./ViewProducto";

import "../../css/vendor/bootstrap/css/bootstrap.min.css";
import dbProductos, { searchByName, sortByDate } from "../../data/PruebaProductos";

const LstProductos = ({ titulo, sort }) => {

    const [productos, SetProductos] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(() => {
        if (update) {
            //crea la funcion que llamara los datos
            const respuesta = sort ? sortByDate() : dbProductos;
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
        <div className="container-fluid rounded shadow-sm">
            <div className="row">
                <div className="col-md-8 py-3">
                    <h3 className=""><b>{titulo}</b></h3>
                </div>
                <div className="col-md-4 py-3">
                    <input className="form-control" placeholder="Busqueda" onChange={search} />
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
