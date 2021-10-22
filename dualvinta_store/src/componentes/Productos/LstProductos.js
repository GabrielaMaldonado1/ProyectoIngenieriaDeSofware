import React, { useEffect, useState } from "react";
import ViewProducto from "./ViewProducto";

import "../../css/vendor/bootstrap/css/bootstrap.min.css";
import dbProductos from "../../data/PruebaProductos";

const LstProductos = ({ titulo }) => {

    const [productos, SetProductos] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(() => {
        if (update) {
            //crea la funcion que llamara los datos
            const respuesta = dbProductos;
            SetProductos(respuesta);
            setUpdate(false);
        };
    }, [update]);

    return (
        <div className="container-fluid rounded shadow-sm">
            <h3 className="py-3"><b>{titulo}</b></h3>
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
