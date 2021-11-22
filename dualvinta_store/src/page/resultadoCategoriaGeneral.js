import React from 'react'
import { useParams } from "react-router";
import { useSelector } from 'react-redux'
import OpcCategorias from '../componentes/Categorias/OpcCategorias'
import { Header } from '../componentes/Header/header'
import LstProductos from '../componentes/Productos/LstProductos'
import { GifExpertApp } from '../GifExpertApp'
import LstProductoCategoria from '../componentes/Productos/LstProductoCategoria';

export const ResultadoCategoriaGeneral = () => {
    

    const { filtro } = useParams();


    return (
        <div>
            <Header seccion="vestimenta" titulo={filtro} />
            <OpcCategorias filtro={ filtro }/>
            <LstProductoCategoria titulo={filtro} filtro={ filtro }/>
            
        </div>
    )
}
