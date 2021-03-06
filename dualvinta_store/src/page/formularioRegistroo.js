import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useHistory } from "react-router";
import { UseStateUser } from "../hooks/UseStateUser";
import '../css/formularioActualizar.css';
import Logo from '../data/img/DUALVINTA.png'
import LogoLogin from '../data/img/DUALVINTA_Logo.png';

export const Formulario = () => {
    const [todo, setTodo] = useState({
        nombre: "",
        apellido: "",
        departamento: "",
        ciudad: "",
        direccion: "",
        telefono: "",

    });

    const userActive = UseStateUser();
    const history = useHistory();
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nombre, apellido, departamento, ciudad, direccion, telefono } = todo;

        if (!nombre.trim() || !apellido.trim() || !departamento.trim() || !ciudad.trim() || !direccion.trim() || !telefono.trim()) {
            setError(true);
            return;
        }

        setError(false);

        console.log(todo);

        setTodo({
            nombre: "",
            apellido: "",
            departamento: "",
            ciudad: "",
            direccion: "",
            telefono: "",


        });
    };

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const PintarError = () => (
        <div className="alert alert-danger">Campos obligatorios</div>
    );

    const registrar = (e) => {
        e.preventDefault();

        const infoGuardar = {
            ...todo,
            email: userActive.email,
            uid: userActive.uid
        }

        const url = "http://localhost:9000/api/users";

        axios.post(url, infoGuardar);

        history.push('/')
    }

    return (

        <>


            {error && <PintarError />} 
            <section className="bg-login-registro">
                <div className="login2">
                    <div className="Logo">
                        <img className="img_logos" src={LogoLogin} alt="Logo"></img>
                    </div>
                    <h2 className="texhh">Paso 2 de 2 </h2>
                    <h1 className="texhh">Termina de configurar tu cuenta</h1>
                    <form onSubmit={registrar} className="formulario-login">
                        <input
                            name="nombre"
                            placeholder="nombre"
                            type="text"
                            className="email__login email__logins"
                            onChange={handleChange}
                            value={todo.nombre}
                            autoComplete="off"
                        />
                        <input
                            name="apellido"
                            placeholder="apellido"
                            type="text"
                            className="email__login"
                            onChange={handleChange}
                            value={todo.apellido}
                            autoComplete="off"
                        />
                        <input
                            name="departamento"
                            placeholder=" departamento"
                            type="text"
                            className="email__login"
                            onChange={handleChange}
                            value={todo.departamento}
                            autoComplete="off"
                        />
                        <input
                            name="ciudad"
                            placeholder="ciudad"
                            type="text"
                            className="email__login"
                            onChange={handleChange}
                            value={todo.ciudad}
                            autoComplete="off"
                        />
                        <input
                            name="direccion"
                            placeholder=" direccion"
                            type="text"
                            className="email__login"
                            onChange={handleChange}
                            value={todo.direccion}
                            autoComplete="off"
                        />
                        <input
                            name="telefono"
                            placeholder="telefono"
                            type="text"
                            className="email__login"
                            onChange={handleChange}
                            value={todo.telefono}
                            autoComplete="off"
                        />
                        <button className="btn btn-primary act" type="submit" >
                            Terminar
                        </button>
                    
                    </form>
                </div>
                
            </section>
        </>

    );
};

export default Formulario;

