import React from 'react'
import OpcCategorias from '../componentes/Categorias/OpcCategorias'
import { Header } from '../componentes/Header/header'
import LstProductos from '../componentes/Productos/LstProductos'
import { GifExpertApp } from '../GifExpertApp'
import Footer from '../componentes/Footer';

export const CuidadoPersonal = () => {
    return (
        <div>
            <Header seccion="cuidado" titulo="CUIDADO PERSONAL"/>
            <OpcCategorias />

            <LstProductos titulo="Resultados Generales"/>
        <Footer />

        </div>
    )
}