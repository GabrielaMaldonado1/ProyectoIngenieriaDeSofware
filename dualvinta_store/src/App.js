

import { Provider } from "react-redux";
import { AppRouters } from "./routes/route";
import { store } from "./store/store";
import { AuthProvider } from './context/AuthContext';



function App() {
    return (
        <Provider store={ store }>
            <AuthProvider> 
            
                <AppRouters />
            </AuthProvider> 
        </Provider>
       
    );
}



//<Route exact path="/rcontraseña" component={RecuperarContraseña} />//


export default App;

