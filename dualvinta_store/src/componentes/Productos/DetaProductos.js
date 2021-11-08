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
            const prueba = find(id);
            console.log(prueba)
            setProducto(prueba);
            
        };
    }, [update, id]);

    const { nombre, imagen, categoria, detalles, marca, modelo, precio, cantidad, fecha } = producto;
    console.log( nombre);

    return (  
        <div className="rounded shadow-sm container-fluid py-4" style={{ marginTop: 40 }}>
            <h4 className="py-2"><b>Detalles de Producto</b></h4>
            <hr style={{ backgroundColor: "#F5DA81" }} />
            <div className="row">
                <div className="col-md-6">
                    <img src={imagen} alt="imagenProducto" width="100%" />
                </div>
                <div className="col-md-6 d-flex justify-component-center" style={{ alignItems: "center" }}>
                    <div>
                        <h4><b>{nombre}</b></h4>
                        <p>{categoria}</p>
                        <p>{detalles}</p>
                        <hr style={{ backgroundColor: "#F5DA81" }} />
                        <h6>Marca: {marca}</h6>
                        <h6>Modelo: {modelo}</h6>
                        <h6>Precio: {precio} LPS </h6>
                        <h6>Exitencias: {cantidad} Unidades </h6>
                        <hr style={{ backgroundColor: "#F5DA81" }} />
                        <h6>Producto Agregado en {fecha}</h6>
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