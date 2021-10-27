import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Categorias } from './page/categorias';
import { CuidadoPersonal } from './page/CuidadoPersonal';
import DetallesProducto from './page/DetallesPorProductos';
import { Home } from './page/Home';
import { Login } from './page/login';
import PruebaProducto from './page/PruebaProductos';
import { SignUp } from './page/registro';

function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route exact path='/categorias' component={ Categorias } />
                        <Route exact path='/' component={Home} />
                        <Route exact path='/cuidado' component={CuidadoPersonal} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path="/registro" component={ SignUp } />
                        <Route exact path="/lesly" component={PruebaProducto} />
                        <Route exact path="/detalles_de_producto/:id" component={DetallesProducto} />
                    </Switch>
                </AuthProvider>
            </Router>
        </>
    );
}

export default App;

