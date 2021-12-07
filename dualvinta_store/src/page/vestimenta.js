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
 
           <LstProductoAllData titulo="VISTETE A LA MODA CON DUALVINTA" filtro="Ropa Masculina" filtro2="Ropa Femenina"/>
        <Footer />
            
        </div>
    )
}