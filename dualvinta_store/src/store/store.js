import thunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { ProductoReducer } from "../reducers/productoReducer";
import { AuthReducer } from '../reducers/authReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    producto: ProductoReducer,
    auth: AuthReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
    
    );