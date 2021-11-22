
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
import { Producto } from '../page/producto';
import { ResultadoCategoriaGeneral } from '../page/resultadoCategoriaGeneral';
import { ProductoOpcCategoriaFiltro } from '../page/productoOpcCaregoria';
import { CarroCompras } from '../page/carroCompras';



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
            <Route exact path="/detalles_de_producto/:id" component={DetallesProducto} />
            <Route exact path="/users/:id" component={DetallesUsuario} />
            <Route exact path="/vestimenta" component={Vestimenta} />
            <Route exact path="/AdminDash" component={Dashboard} />
            <Route exact path="/producto/:filtro" component={Producto} />
            <Route exact path="/resultadoCategoria/:filtro" component={ResultadoCategoriaGeneral} />
            <Route exact path="/resultadoOpcCategoria/:filtro/:categoria" component={ProductoOpcCategoriaFiltro} />
            <Route exact path="/carroCompras" component={CarroCompras} />
            

        </Switch>
    </AuthProvider>
</Router>
    )
}




