import React from "react";
import { Header } from '../componentes/Header/header'
import DetaProducts from "../componentes/Productos/DetaProductos";
import Footer from '../componentes/Footer';

const DetallesProducto = () => {
    
    return(
        <div>
            <Header seccion="inicio" titulo="Producto" />
            <DetaProducts />
        <Footer />

        </div>
    )
};

export default DetallesProducto;