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
        if ( (password.length > 8) && password === confirm) {
            try {
                await signup(email, password);
                history.push('/Formulario');
            } catch (error) {
                setError('Wrong Credentials');
                setTimeout(() => setError(''), 1500);
            }
        } else {
            setError('Las Contraseñas no coinciden o es no es mayor a 8 caracteres');
            alert('Las Contraseñas no coinciden o es no es mayor a 8 caracteres');
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

                
            </div>
        </div>
    )
}