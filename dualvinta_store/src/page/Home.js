import React, { useEffect } from 'react'
import { Header } from '../componentes/Header/header'
import LstProductos, { LstProductos2 } from '../componentes/Productos/LstProductos'
import { UseStateUser } from '../hooks/UseStateUser'
import { OfertasHome } from "../componentes/ofertas.js"

import "../css/pages.css";



export const Home = () => {

    const userActive = UseStateUser();

            console.log( userActive );
 

    return (
        <div>
            <Header seccion="inicio" titulo="INICIO" userActive={userActive} />
            
            <OfertasHome />
            <LstProductos titulo="NUEVOS PRODUCTOS" sort />
            <LstProductos titulo="PRODUCTOS MAS VENDIDOS"/>
            
        </div>
    )
}

