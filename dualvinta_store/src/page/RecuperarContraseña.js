import React, { useEffect, useState } from 'react';
import '../database/UseFirebase.js';

import LogoLogin from '../data/img/DUALVINTA_Logo.png';

import '../css/cssLoginRegistro.css';

import { useHistory } from 'react-router';

export const RecuperarContrasena = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();

    const [formState, setFormState] = useState({
        email: ''
    });

    const { email } = formState;

    useEffect(() => {
        // console.log('hey!');
    }, []);

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        });

    };

   
    return (
        <div className="bg-login-registro">
            <div className="registro">
                <div className="Logo">
                    <img className="img_logo" src={LogoLogin} alt="Logo"></img>
                </div>
                
                <form className="formulario-login" >
                    
                    <h5>Ingrese su correo electronico, se le enviara un correo para el cambio de contraseña</h5>

                    <input type="email" className="email__login1" name="email" placeholder="Correo electronico" autoComplete="off" required
                        onChange={handleInputChange} ></input>
                    

                    <input className="btn__registro" type="submit" value="Enviar"></input>

                </form>

                
            </div>
        </div>
    )
}