import React from 'react'
import OpcCategorias from '../componentes/Categorias/OpcCategorias'
import { Header } from '../componentes/Header/header'
import LstProductos from '../componentes/Productos/LstProductos'
import { GifExpertApp } from '../GifExpertApp'
import Footer from '../componentes/Footer';
import LstProductoAllData from '../componentes/Productos/LstProductoAllData'

export const Vestimenta = () => {
    return (
        <div>
            <Header seccion="vestimenta" titulo="VESTIMENTA" />
            
            <OpcCategorias />

            <LstProductoAllData titulo="Resultados Generales"/>
        <Footer />
            
        </div>
    )
}