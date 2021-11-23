import React from 'react'
import { useParams } from "react-router";
import { Header } from '../componentes/Header/header'
import Footer from '../componentes/Footer';
import LstProductoCategoria from '../componentes/Productos/LstProductoCategoria';
import LstProductoFiltro from '../componentes/Productos/LstProductoFiltro';

export const ProductoOpcCategoriaFiltro = () => {
    

    const { filtro, categoria } = useParams();


    return (
        <div>
            <Header seccion="vestimenta" titulo={filtro} />
            
            <LstProductoFiltro filtro={filtro} categoria={ categoria }/>
            <Footer />
        </div>
    )
}

