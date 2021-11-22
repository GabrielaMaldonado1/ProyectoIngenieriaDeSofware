import React from 'react'
import { useSelector } from 'react-redux'
import OpcCategorias from '../componentes/Categorias/OpcCategorias'
import { Header } from '../componentes/Header/header'
import LstProductoAllData from '../componentes/Productos/LstProductoAllData'
import LstProductos from '../componentes/Productos/LstProductos'
import { GifExpertApp } from '../GifExpertApp'

export const Vestimenta = () => {
    const {data} = useSelector( state => state.producto)
    return (
        <div>
            <Header seccion="vestimenta" titulo="VESTIMENTA" />           

            <LstProductoAllData titulo="TODO EN VESTIMENTA" />
            
        </div>
    )
}