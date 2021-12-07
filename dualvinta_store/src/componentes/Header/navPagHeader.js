import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export const NavegacionPaginas = ( {seccion} ) => {
    
    const verificar = (actual) => {

        if( seccion === actual){  
            return "active"
        }else{
            return ""
        }

    };


    return (
       <>
       <div className="nav-bg">
        <nav className="navegacion contenedor">
            <Link className={ verificar("inicio") } to="/" >Inicio</Link>
            <Link className={ verificar("categorias") } to="/categorias" >Categorias</Link>
            <Link className={ verificar("cuidado") } to="/cuidado">Cuidado personal</Link>
            <Link className={ verificar("vestimenta") } to="/vestimenta" >Vestimenta</Link>
            <Link className={ verificar("calzado") } to="/calzado">Calzado</Link>
            <Link className={ verificar("carrito") } to="/carroCompras">Carrito de compras</Link>
            <Link className={ verificar("nosotros") } to="/nosotros">Nosotros</Link>
        </nav>
       </div>
        
       </>
    )
}