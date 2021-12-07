import React from 'react'
import OpcCategorias from '../componentes/Categorias/OpcCategorias'
import { Header } from '../componentes/Header/header'
import LstProductos from '../componentes/Productos/LstProductos'
import { GifExpertApp } from '../GifExpertApp'
import Footer from '../componentes/Footer';
import LstProductoAllData from '../componentes/Productos/LstProductoAllData'

export const CuidadoPersonal = () => {
    return (
        <div>
            <Header seccion="cuidado" titulo="CUIDADO PERSONAL" />

           <LstProductoAllData titulo="PARA QUE TE CUIDES DE LA MEJOR MANERA CON DUALVINTA." filtro="Cuidado Personal"/>
            <Footer />

        </div>
    )
}