import React, { useEffect, useState } from 'react'
import { Header } from '../componentes/Header/header'
import LstProductos, { LstProductos2 } from '../componentes/Productos/LstProductos'
import CarouselLesly, { OfertasHome } from "../componentes/ofertas.js"
import { useDispatch, useSelector } from "react-redux";
import { UseAxiosCategoria } from '../hooks/UseAxiosLimit';
import { showCategoriaProducto, showAllProducto } from '../actions/producto';
import "../css/pages.css";
import { BarraTips } from '../componentes/homeComponents/barraTips';
import { OpcionesHome } from '../componentes/homeComponents/opciones';
import { Nuevo_MasVendido } from '../componentes/homeComponents/nuevo_MasVendido';


export const Home = () => {

    const dispatch = useDispatch();

    const {data} = useSelector( state => state.producto);

   const [checking, setChecking] = useState(true)

   

    
    useEffect(() => {

         dispatch(showAllProducto());

         setTimeout(() => {
             setChecking(false)
         }, 1500);
         
        
    }, [dispatch, setChecking ] )

    if (checking) {
        return(
            <div className="cargando">
                <div class="preloader"></div>
                <h1>Abriendo la tienda</h1>
            </div>
            
            
        )
    }
 
    return (
        <div>
            <Header seccion="inicio" titulo="INICIO" />
            <CarouselLesly />
            <Nuevo_MasVendido titulo="NUEVOS PRODUCTOS" filtro="nuevo" />
            <BarraTips />
            <OpcionesHome />
            <Nuevo_MasVendido titulo="MAS VENDIDO" filtro="vendido" />
            
        </div>
    )
}

/* 



<LstProductos titulo="NUEVOS PRODUCTOS" data={data} />
*/

