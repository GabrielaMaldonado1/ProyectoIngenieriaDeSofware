import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Categorias } from './page/categorias';
import { CuidadoPersonal } from './page/CuidadoPersonal';
import { Home } from './page/Home';

function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route exact path='/categorias' component={ Categorias } />
                        <Route exact path='/' component={Home} />
                        <Route exact path='/cuidado' component={CuidadoPersonal} />
                    </Switch>
                </AuthProvider>
            </Router>
        </>
    );
}

export default App;

