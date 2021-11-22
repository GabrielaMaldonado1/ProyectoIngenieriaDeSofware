import React from 'react'
import { useParams } from "react-router";
import { useSelector } from 'react-redux'
import OpcCategorias from '../componentes/Categorias/OpcCategorias'
import { Header } from '../componentes/Header/header'
import LstProductos from '../componentes/Productos/LstProductos'
import { GifExpertApp } from '../GifExpertApp'

export const Producto = () => {
    

    const { filtro } = useParams();


    return (
        <div>
            <Header seccion="vestimenta" titulo={filtro} />
            
            <LstProductos titulo="Resultados Generales" filtro={ filtro }/>
            
        </div>
    )
}