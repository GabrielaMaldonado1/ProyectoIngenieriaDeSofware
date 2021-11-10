import React, { useEffect } from 'react'
import { Header } from '../componentes/Header/header'
import LstProductos, { LstProductos2 } from '../componentes/Productos/LstProductos'
import CarouselLesly, { OfertasHome } from "../componentes/ofertas.js"

//import "../css/pages.css";



export const Home = () => {
 
    return (
        <div>
            <Header seccion="inicio" titulo="INICIO" />
            
            <CarouselLesly />
            <LstProductos titulo="NUEVOS PRODUCTOS" sort />
            <LstProductos titulo="PRODUCTOS MAS VENDIDOS"/>
            
        </div>
    )
}

