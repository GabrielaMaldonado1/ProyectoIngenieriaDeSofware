import React from 'react'
import OpcCategorias from '../componentes/Categorias/OpcCategorias'
import { Header } from '../componentes/Header/header'
import LstProductos from '../componentes/Productos/LstProductos'
import { GifExpertApp } from '../GifExpertApp'
import Footer from '../componentes/Footer';

export const Vestimenta = () => {
    return (
        <div>
            <Header seccion="vestimenta" titulo="VESTIMENTA" />
            
            <OpcCategorias />

            <LstProductos titulo="Resultados Generales"/>
        <Footer />
            
        </div>
    )
}