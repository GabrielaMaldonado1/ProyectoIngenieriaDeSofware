import React from 'react'
import OpcCategorias from '../componentes/Categorias/OpcCategorias'
import { Header } from '../componentes/Header/header'
import LstProductos from '../componentes/Productos/LstProductos'
import { GifExpertApp } from '../GifExpertApp'
import Footer from '../componentes/Footer';
import LstProductoAllData from '../componentes/Productos/LstProductoAllData'

export const Calzado = () => {
    return (
        <div>
            <Header seccion="calzado" titulo="CALZADO" />

           <LstProductoAllData titulo="A TU MEDIDA, A TU ESTILO." filtro="Calzado"/>
            <Footer />

        </div>
    )
}