import React, { useEffect } from 'react'
import { Header } from '../componentes/Header/header'
import LstProductos, { LstProductos2 } from '../componentes/Productos/LstProductos'
import { UseStateUser } from '../hooks/UseStateUser'



export const Home = () => {

    const userActive = UseStateUser();

            console.log( userActive.displayName );
 

    return (
        <div>
            <Header seccion="inicio" titulo="INICIO" userActive={userActive} />
            <LstProductos titulo="Lo mas Reciente..." sort />
            <LstProductos titulo="Lo mas Vendido!..."/>
            <LstProductos titulo="Resultados Generales"/>
        </div>
    )
}

