import React from 'react'
import { AreaSeccionCategoria } from '../componentes/Categorias/CategorySalud/AreaSeccionCategoria';
import { Header } from '../componentes/Header/header'
import Footer from '../componentes/Footer';
import dbCategoriaMujer from '../data/Arreglos/CategoriaMujer'
import dbCategoriaHombre from '../data/Arreglos/CategoriaHombre'
import dbCategoriaCalzado from '../data/Arreglos/CategoriaCalzado'

export const Categorias = () => {
    
    
    return (
        <div>
            <Header seccion="categorias" titulo="CATEGORIAS"/>

            <h2 className="titulo_area">VESTIMENTA</h2>
    
            <AreaSeccionCategoria titulo="MUJER" opciones={dbCategoriaMujer}/>
            <AreaSeccionCategoria titulo="HOMBRE" opciones={dbCategoriaHombre}/>

            <h2 className="titulo_area">CALZADO</h2>
            <AreaSeccionCategoria titulo="CALZADO" opciones={dbCategoriaCalzado}/>

        <Footer />

        </div>
    )
}