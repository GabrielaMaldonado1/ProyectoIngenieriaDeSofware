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
import { UseStateUser } from '../hooks/UseStateUser';
import { login } from '../actions/auth';
import { UserActiveLoggueado } from '../actions/user';
import { showCarroCompra } from '../actions/carroCompra';
import { cargadoAction } from '../actions/loading';



export const Home = () => {

    const dispatch = useDispatch();

    const { data } = useSelector(state => state.producto)
    
    const { cargado } = useSelector(state => state.cargado)


    const [checking, setChecking] = useState(true);
    const [userCheck, setUserCheck] = useState(false);

    const userActive = UseStateUser();

    useEffect(() => {

        dispatch(showAllProducto());
         dispatch(showCarroCompra());

        setTimeout(() => {
            setChecking(false)
            setUserCheck(true)
        }, 1500);


    }, [dispatch, setChecking])

    if (checking && !cargado) {
        return (
            <div className="cargando">
                <div class="preloader"></div>
                <h1>Abriendo la tienda</h1>
            </div>


        )
    }


    if ((userActive !== undefined) && userCheck) {

        dispatch(login(userActive.uid, userActive.email));

        dispatch(UserActiveLoggueado(userActive.uid));

        setUserCheck(false)

        dispatch(cargadoAction(true))

    }


    return (
        <div>
            <Header seccion="inicio" titulo="INICIO" />
            {
                //Aisle el contenido en un div con una propiedad overflowX ya que hay un problema con el css de los componentes que impide que se acoplen bien a la pagina.
            }
            <div style={{overflowX:"auto"}}>
                <CarouselLesly />
                <Nuevo_MasVendido titulo="NUEVOS PRODUCTOS" filtro="nuevo" />
                <BarraTips />
                <OpcionesHome />
                <Nuevo_MasVendido titulo="MAS VENDIDO" filtro="vendido" />
            </div>
            <Footer />
        </div>
    )
}

/*
<LstProductos titulo="NUEVOS PRODUCTOS" data={data} />
*/

