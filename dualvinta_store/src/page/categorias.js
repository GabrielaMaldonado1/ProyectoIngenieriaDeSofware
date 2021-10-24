import React from 'react'
import { OpcCategorias } from '../componentes/Categorias/OpcCategorias'
import { Header } from '../componentes/Header/header'

import '../css/categorias.css';

export const Categorias = () => {
    
    
    
    return (
        <div>
            <Header seccion="categorias" titulo="CATEGORIAS"/>
            <OpcCategorias />
        </div>
    )
}