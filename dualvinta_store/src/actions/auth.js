import { types } from "../types/types";
import { AuthProvider } from '../context/AuthContext.js';

const {  signupGoogle } = AuthProvider;



export const startGoogleLogin = () => {
    
    return (dispatch) => {
       signupGoogle()
        .then( ({user}) => {
            console.log(user)
            dispatch(
                login(user.uid, user.displayName)
            )
        })
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})