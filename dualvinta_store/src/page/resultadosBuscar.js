import React from 'react'
import { Header } from '../componentes/Header/header'
import Footer from '../componentes/Footer';
import LstProductoResultado from '../componentes/Productos/LstProductoResultado'
import { useParams } from "react-router";

export const ResultadosBuscar = () => {
    
    const { filtro } = useParams();


    return (
        <div>
            <Header seccion="none" titulo="RESULTADOS DE LA BUSQUEDA" />

           <LstProductoResultado titulo="RESULTADOS : " filtro={filtro}/>
            <Footer />

        </div>
    )
}