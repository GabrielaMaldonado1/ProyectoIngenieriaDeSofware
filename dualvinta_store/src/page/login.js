import React, { useEffect, useState } from 'react';
import '../database/UseFirebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LogoLogin from '../data/img/DUALVINTA_Logo.png';

import '../css/cssLoginRegistro.css';
import { useAuth } from '../context/AuthContext.js';
import { useHistory } from 'react-router';

export const Login = () => {

    const { login, signupGoogle, signupFacebook } = useAuth();

    const [loading, setLoading] = useState(false);
    const [errord, setError] = useState('');

    const history = useHistory();

    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formState;

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
    try {
      await login(email, password);
      setLoading(false);
      history.push('/');
    } catch (error) {
      setLoading(false);
      setError('Wrong Credentials');
      alert("Los datos son incorrectos");
      setTimeout(() => setError(''), 1500);

    }
  }

    const handleSubmitGoogle = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await signupGoogle();
            setLoading(false);
            history.push('/');
        } catch (error) {
            setLoading(false);
            setError('Wrong Credentials');
            alert("Error");
            setTimeout(() => setError(''), 1500);

        }

    }

    const handleSubmitFacebook = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await signupFacebook();
            setLoading(false);
            history.push('/');
        } catch (error) {
            setLoading(false);
            setError('Wrong Credentials');
            alert("Error");
            setTimeout(() => setError(''), 1500);

        }

    }





  const mostrarContrasena = (e) => {
      e.preventDefault();
      alert("gr");
      var tipo = document.getElementsByName("password");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
  }

    return (
        <section className="bg-login-registro">
        <div className="login">
            <div className="Logo">
                <img className="img_logo" src={LogoLogin} alt="Logo"></img>
            </div>
            <form className="formulario-login" onSubmit={ handleSubmit}>
                <input type="email" className="email__login" name="email" placeholder="Correo Electronico" autoComplete="on" required
                    onChange={handleInputChange} ></input>

                <input type="password" className="password__login" id="password" name="password" placeholder="Contraseña" autoComplete="off" required
                    onChange={handleInputChange}></input>
            

                <input className="btn__login" type="submit" value="Iniciar Sesión"></input>

            </form>

            <div className="Opciones_usuario">
                <a href="#" className="OLcontraseña">Recuperar Contraseña</a>
                <Link to='/registro' className="Registro">Registrarse</Link>
            </div>

            <p className="p_login">Puedes iniciar con tus redes sociales</p>

            <div className="Opciones_redes_login">
               <a onClick={handleSubmitGoogle} className="google__login"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
             </svg></a>
                <a onClick={handleSubmitFacebook} className="facebook__login"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#0000ff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg></a>
            </div>
        </div>
        </section>
    )
}