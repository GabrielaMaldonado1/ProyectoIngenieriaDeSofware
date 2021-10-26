import React, { useContext, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UseStateUser = () => {

    const [state, setState] = useState();


    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
        
        if (user) {

            const uid = user.uid;
            setState(user);

            // ...
        } else {
            // User is signed out
            // ...
            setState()
        }
    });

    return state;

}