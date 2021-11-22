import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { find } from "../../data/PruebaProductos";
import carrito from "../../data/icons/carrito.png";
import { useDispatch, useSelector } from "react-redux";

const DetaProducts = () => {

    const { data } = useSelector(state => state.producto);

    const [update, setUpdate] = useState(true);
    const [productoData, setProducto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (update) {
            setUpdate(false);

            data.map((producto, index) => {

                if ( producto._id === id) {

                   setProducto(producto);
                }
            }
            )
            

        };
    }, [update, id]);

    console.log(id +"  " + productoData)

    const { name, imgUrl, categoria, descripcion, marca, modelo, precio, existencias } = productoData;

    return (
        <div className="rounded shadow-sm container-fluid py-4" style={{ marginTop: 40 }}>
            <h4 className="py-2"><b>Detalles de Producto</b></h4>
            <hr style={{ backgroundColor: "#F5DA81" }} />
            <div className="row">
                <div className="col-md-6 d-flex text-center" style={{ alignItems: "center" }}>
                    <div>
                        <img src={imgUrl} alt="imagenProducto" width="40%" />
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-component-center" style={{ alignItems: "center" }}>
                    <div>
                        <h4><b>{name}</b></h4>
                        <p>{categoria}</p>
                        <p>{descripcion}</p>
                        <hr style={{ backgroundColor: "#F5DA81" }} />
                        <h6>Marca: {marca}</h6>
                        <h6>Modelo: {modelo}</h6>
                        <h6>Precio: {precio} LPS </h6>
                        <h6>Exitencias: {existencias} Unidades </h6>
                        <hr style={{ backgroundColor: "#F5DA81" }} />
                        <div className="py-4">
                            <button className="btn btn-outline-success" >
                                <img src={carrito} alt="iconCarrito" />Agregar al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ backgroundColor: "#F5DA81" }} />
        </div>
    )
};

export default DetaProducts;