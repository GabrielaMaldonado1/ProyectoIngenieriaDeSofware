import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';

import { Categorias } from '../page/categorias';
import { CuidadoPersonal } from '../page/CuidadoPersonal';
import DetallesProducto from '../page/DetallesPorProductos';
import DetallesUsuario from '../page/DetallesPorUsuario';
import { Home } from '../page/Home';
import { Login } from '../page/login';
import PruebaProducto from '../page/PruebaProductos';
import { SignUp } from '../page/registro';
import { Vestimenta } from '../page/vestimenta';
import { Dashboard } from '../admin/dashboard';
import Nosotros from '../page/Nosotros';
import { Formulario } from '../page/formularioRegistroo';



export const AppRouters = () => {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path='/categorias' component={Categorias} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/cuidado' component={CuidadoPersonal} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path="/registro" component={SignUp} />
                    <Route exact path="/producto" component={PruebaProducto} />
                    <Route exact path="/detalles_de_producto/:id" component={DetallesProducto} />
                    <Route exact path="/users/:id" component={DetallesUsuario} />
                    <Route exact path="/vestimenta" component={Vestimenta} />
                    <Route exact path="/AdminDash" component={Dashboard} />
                    <Route exact path="/nosotros" component={Nosotros} />
                    <Route exact path="/Formulario" component={Formulario} />
                </Switch>
            </AuthProvider>
        </Router>
    )
}





