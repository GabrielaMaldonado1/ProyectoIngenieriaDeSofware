import React from 'react'
import { Header } from '../componentes/Header/header'
import LstProductos from '../componentes/Productos/LstProductos'

export const Home = () => {
    return (
        <div>
            <Header seccion="inicio" titulo="INICIO"/>
            <LstProductos titulo="Lo mas Vendido!..." />
            <LstProductos titulo="Resultados Generales" />
        </div>
    )
}
