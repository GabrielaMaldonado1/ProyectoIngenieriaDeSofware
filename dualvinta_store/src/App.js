

import { Provider } from "react-redux";
import { AppRouters } from "./routes/route";
import { store } from "./store/store";



function App() {
    return (
        <Provider store={ store }>
            <AppRouters />
        </Provider>
       
    );
}



//<Route exact path="/rcontraseña" component={RecuperarContraseña} />//


export default App;

