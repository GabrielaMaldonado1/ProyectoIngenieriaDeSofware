import React from "react";
import { Header } from '../componentes/Header/header'
import DetaProducts from "../componentes/Productos/DetaProductos";

const DetallesProducto = () => {
    
    console.log("AAAAAAAH")
    return(
        <div>
            <Header seccion="inicio" titulo="Producto" />
            <DetaProducts />
        </div>
    )
};

export default DetallesProducto;