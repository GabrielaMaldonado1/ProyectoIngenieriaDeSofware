import React from "react";
import LstProductos from "../componentes/Productos/LstProductos";

import "../css/vendor/bootstrap/css/bootstrap.min.css";

const PruebaProducto = () => {
    return(
        <div className="">
            <LstProductos titulo="Lo mas Vendido!..." />
        </div>
    )
};

export default PruebaProducto