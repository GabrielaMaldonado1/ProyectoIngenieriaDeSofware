import thunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { ProductoReducer } from "../reducers/productoReducer";
import { AuthReducer } from '../reducers/authReducer';
import { UserReducer } from '../reducers/userReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    producto: ProductoReducer,
    auth: AuthReducer,
    user: UserReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
    
    );