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
            <a className={ verificar("vestimenta") } href="#">Vestimenta</a>
            <a className={ verificar("calzado") } href="#">Calzado</a>
            <a className={ verificar("carrito") } href="#">Carrito de compras</a>
            <a className={ verificar("pagar") } href="#">Pagar</a>
            <a className={ verificar("nosotros") } href="#">Nosotros</a>
        </nav>
       </div>
        
       </>
    )
}