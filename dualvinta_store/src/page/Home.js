import React, { useEffect, useState } from 'react'
import { Header } from '../componentes/Header/header'
import CarouselLesly, { OfertasHome } from "../componentes/ofertas.js"
import { useDispatch, useSelector } from "react-redux";
import { UseAxiosCategoria } from '../hooks/UseAxiosLimit';
import { showCategoriaProducto, showAllProducto } from '../actions/producto';
import "../css/pages.css";
import { BarraTips } from '../componentes/homeComponents/barraTips';
import { OpcionesHome } from '../componentes/homeComponents/opciones';
import { Nuevo_MasVendido } from '../componentes/homeComponents/nuevo_MasVendido';
import Footer from '../componentes/Footer';
import {UseStateUser} from '../hooks/UseStateUser';
import { login } from '../actions/auth';
import { UserActiveLoggueado } from '../actions/user';



export const Home = () => {

    const dispatch = useDispatch();

    const {data} = useSelector( state => state.producto)


   const [checking, setChecking] = useState(true);
   const [userCheck, setUserCheck] = useState(false);

   const userActive = UseStateUser();
    
    useEffect(() => {

         dispatch(showAllProducto());

         setTimeout(() => {
             setChecking(false)
             setUserCheck(true)
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


    if((userActive !== undefined) && userCheck){

        dispatch(login(userActive.uid, userActive.email));

        dispatch(UserActiveLoggueado(userActive.uid));

        setUserCheck(false)

       

    }


    return (
        <div>
            <Header seccion="inicio" titulo="INICIO" />
            <CarouselLesly />
            <Nuevo_MasVendido titulo="NUEVOS PRODUCTOS" filtro="nuevo" />
            <BarraTips />
            <OpcionesHome />
            <Nuevo_MasVendido titulo="MAS VENDIDO" filtro="vendido" />

        <Footer />
            
           
            
        </div>
    )
}

/* 
<LstProductos titulo="NUEVOS PRODUCTOS" data={data} />
*/

