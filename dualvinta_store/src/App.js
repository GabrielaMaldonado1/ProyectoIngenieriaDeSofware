import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Categorias } from './page/categorias';
import { CuidadoPersonal } from './page/CuidadoPersonal';
import DetallesProducto from './page/DetallesPorProductos';
import DetallesUsuario from './page/DetallesPorUsuario';
import { Home } from './page/Home';
import { Login } from './page/login';
import PruebaProducto from './page/PruebaProductos';
//import { RecuperarContraseña } from './page/RecuperarContraseña';//
import { SignUp } from './page/registro';
import { Vestimenta } from './page/vestimenta';
import {FormProducto} from './admin/formProducto'

function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path='/categorias' component={Categorias} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/cuidado' component={CuidadoPersonal} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path="/registro" component={SignUp} />
                    <Route exact path="/lesly" component={PruebaProducto} />
                    <Route exact path="/detalles_de_producto/:id" component={DetallesProducto} />
                    <Route exact path="/users/:id" component={DetallesUsuario} />
                    <Route exact path="/vestimenta" component={Vestimenta} />
                    <Route exact path="/formProducto" component={FormProducto} />
                    
                </Switch>
            </AuthProvider>
        </Router>
    );
}



//<Route exact path="/rcontraseña" component={RecuperarContraseña} />//


export default App;

