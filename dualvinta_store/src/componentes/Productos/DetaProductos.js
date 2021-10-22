import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { find } from "../../data/PruebaProductos";
import carrito from "../../data/icons/carrito.png";

const DetaProducts = () => {

    const [update, setUpdate] = useState(true);
    const [producto, setProducto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (update) {
            setUpdate(false);
            setProducto(find(id));
        };
    }, [update, id]);

    return (
        <div className="rounded shadow-sm container-fluid py-4" style={{ marginTop: 40, marginBotto: 4 }}>
            <h4 className="py-2"><b>Detalles de Producto</b></h4>
            <hr style={{ backgroundColor: "#F5DA81" }} />
            <div className="row">
                <div className="col-md-6">
                    <img src={producto.imagen} alt="imagenProducto" width="100%" />
                </div>
                <div className="col-md-6 d-flex justify-component-center" style={{ alignItems: "center" }}>
                    <div>
                        <h4><b>{producto.nombre}</b></h4>
                        <p>{producto.categoria}</p>
                        <p>{producto.detalles}</p>
                        <hr style={{ backgroundColor: "#F5DA81" }} />
                        <h6>Marca: {producto.marca}</h6>
                        <h6>Modelo: {producto.modelo}</h6>
                        <h6>Precio: {producto.precio} LPS </h6>
                        <h6>Exitencias: {producto.cantidad} Unidades </h6>
                        <hr style={{ backgroundColor: "#F5DA81" }} />
                        <h6>Producto Agregado en {producto.fecha}</h6>
                        <div className="py-4">
                            <button className="btn btn-outline-success" >
                                <img src={carrito} alt="iconCarrito" />Agregar al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DetaProducts;