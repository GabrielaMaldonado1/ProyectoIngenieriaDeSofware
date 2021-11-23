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
            <a className={ verificar("calzado") } href="#">Calzado</a>
            <Link className={ verificar("carrito") } to="/carroCompras">Carrito de compras</Link>
            <a className={ verificar("nosotros") } href="/nosotros">Nosotros</a>
        </nav>
       </div>
        
       </>
    )
}