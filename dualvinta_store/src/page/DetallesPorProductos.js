import React from "react";
import { Header } from '../componentes/Header/header'
import DetaProducts from "../componentes/Productos/DetaProductos";

const DetallesProducto = () => {
    return(
        <div>
            <Header seccion="inicio" titulo="INICIO"/>
            <DetaProducts />
        </div>
    )
};

export default DetallesProducto;