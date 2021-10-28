import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/vendor/bootstrap/css/bootstrap.min.css";

import carrito from "../../data/icons/carrito.png";


const ViewProducto = ({ element }) => {
    return (
        <div className="rounded col-md-2 py-2" style={{}}>
            <div className="rounded shadow-sm" style={{ borderStyle: "solid", borderWidth: 1, borderColor: "#F5DA81" }}>
                <div className="container-fluid py-2">
                    <div>
                        <img src={element.imagen} alt="altproducto" width="100%" height={(window.innerWidth > window.innerHeight)? "200" : ""} />
                        <h6 className="py-3">
                            {element.nombre}
                        </h6>
                        <p className="">
                            {element.precio} LPS
                        </p>
                        <Link className="stretched-link" to={`/detalles_de_producto/${element.id}`} />
                    </div>
                    <button className="btn btn-outline-success" style={{ width: "100%", marginBottom: 10 }}><img src={carrito} alt="iconCarrito" width="25px" height="25px" />
                     Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
};

export default ViewProducto;