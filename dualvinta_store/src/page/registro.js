import React, { useEffect, useState } from 'react';
import '../database/UseFirebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LogoLogin from '../data/img/DUALVINTA_Logo.png';

import '../css/cssLoginRegistro.css';
import { useAuth } from '../context/AuthContext.js';
import { useHistory } from 'react-router';

export const SignUp = () => {

    const { signup } = useAuth();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();

    const [formState, setFormState] = useState({
        nombre: '',
        email: '',
        password: '',
        confirm: '',
    });

    const { nombre, email, password, confirm } = formState;

    useEffect(() => {
        // console.log('hey!');
    }, []);

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(email, password, confirm)
        if (password === confirm) {
            try {
                await signup(email, password);
                history.push('/');
            } catch (error) {
                setError('Wrong Credentials');
                setTimeout(() => setError(''), 1500);
            }
        } else {
            setError('Passwords do not match');
            setTimeout(() => setError(''), 1500);
        }
        setLoading(false);
    }

    return (
        <div className="bg-login-registro">
            <div className="registro">
                <div className="Logo">
                    <img className="img_logo" src={LogoLogin} alt="Logo"></img>
                </div>
                <form className="formulario-login" onSubmit={handleSubmit}>
                    
                    <input type="text" className="email__login1" name="nombre" placeholder="Nombre y Apellido" autoComplete="off" required
                        onChange={handleInputChange} ></input>
                    
                    <input type="email" className="email__login" name="email" placeholder="Correo Electronico" autoComplete="on" required
                        onChange={handleInputChange} ></input>

                    <input type="password" className="password__login" name="password" placeholder="Contraseña" autoComplete="off" required
                        onChange={handleInputChange}></input>

                    <input type="password" className="password__login" name="confirm" placeholder="Confirme su contraseña" autoComplete="off" required
                        onChange={handleInputChange}></input>

                    <input className="btn__registro" type="submit" value="Registrarse"></input>

                </form>

                <p className="h3__registro">Puedes registrarte con tus redes sociales</p>

                <div className="Opciones_redes">
                    <a href="#" className="google__login"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
                    </svg></a>
                    <a href="#" className="facebook__login"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#0000ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg></a>
                </div>
            </div>
        </div>
    )
}