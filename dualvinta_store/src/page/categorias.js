import React from 'react'
import { OpcCategorias } from '../componentes/Categorias/OpcCategorias'
import { OpcIndividual } from '../componentes/Categorias/OpcIndividual';
import { Header } from '../componentes/Header/header'

import '../css/categorias.css';

export const Categorias = () => {
    
    
    return (
        <div>
            <Header seccion="categorias" titulo="CATEGORIAS"/>
    
            <OpcIndividual />
        </div>
    )
}