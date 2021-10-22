import React, { createContext, useContext, useEffect, useState } from 'react';
import {fire} from '../database/UseFirebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';



const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {

    const [currentUser, setCurrentUser] = useState('');

    /* useEffect(() => {
         
         onAuthStateChanged((user) => {
             setCurrentUser(user);
         })
     }, [])*/


    const signup = (email, password) => {
        const aut = getAuth();
        return createUserWithEmailAndPassword(aut, email, password);

    }

    const login = (email, password) => {
        const aut = getAuth();
        return signInWithEmailAndPassword(aut, email, password);
    }

    const logout = () => {
        const aut = getAuth();
        signOut(aut)
    };

    const value = { signup, login, logout };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}