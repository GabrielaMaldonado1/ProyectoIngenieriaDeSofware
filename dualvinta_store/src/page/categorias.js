import React from 'react'
import { CategoriasGeneral } from '../componentes/Categorias/CategoriasGeneral';
import { AreaSeccionCategoria } from '../componentes/Categorias/CategorySalud/AreaSeccionCategoria';
import { OpcCategorias } from '../componentes/Categorias/OpcCategorias'
import { OpcIndividual } from '../componentes/Categorias/OpcIndividual';
import { Header } from '../componentes/Header/header'


export const Categorias = () => {
    
    
    return (
        <div>
            <Header seccion="categorias" titulo="CATEGORIAS"/>
    
            <AreaSeccionCategoria />
        </div>
    )
}