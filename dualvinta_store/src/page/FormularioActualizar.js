import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { UseStateUser } from "../hooks/UseStateUser";
import { GetUserId, updateUserByUid } from "../hooks/UseAxiosGets";
import { async } from "@firebase/util";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import '../css/formularioActualizar.css';
import Logo from '../data/img/DUALVINTA.png'


export const FormularioActualizar = () => {
    
    const [usuarioActiv, setuUsuarioActiv] = useState({});
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        user.map((producto, index) => {

            setuUsuarioActiv(producto)
        })
    
    }, [])


    const [userA, setUser] = useState({
        
        nombre: usuarioActiv.nombre,
        apellido: usuarioActiv.apellido,
        email: usuarioActiv.email,
        departamento: usuarioActiv.departamento,
        ciudad: usuarioActiv.cuidad,
        direccion: usuarioActiv.direccion,
        telefono: usuarioActiv.telefono,
        uid: usuarioActiv.uid
    });

    const { uid } = useParams();

    const { nombre, apellido, email, departamento, ciudad, direccion, telefono } = userA;

    const history = useHistory();
    const [error, setError] = useState(false);

  
    const handleChange = (e) => {
        setUser({
            ...userA,
            [e.target.name]: e.target.value,
        });
    };

    const PintarError = () => (
        <div className="alert alert-danger">Campos obligatorios</div>
    );


    const actualizar = () => {
        console.log(userA);

        // cambiar en este metodo la variable de user.id por el id de la otra forma que se obtenga
        updateUserByUid(uid, userA);
      history.push('/')


    }


    return (

        <>
            {error && <PintarError />}

            <img className="imgformact" src={Logo} alt="Logo" />
            
            <div className="FormularioCambiarInfo">
                <h3> Actualizar informanción </h3>
                <input
                    name="nombre"
                    placeholder="nombre"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={nombre}
                />
                <input
                    name="apellido"
                    placeholder="apellido"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={apellido}
                />
                <input
                    name="email"
                    placeholder=" departamento"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={email}
                />
                <input
                    name="departamento"
                    placeholder=" departamento"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={departamento}
                />
                <input
                    name="ciudad"
                    placeholder="ciudad"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={ciudad}
                />
                <input
                    name="direccion"
                    placeholder=" direccion"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={direccion}
                />
                <input
                    name="telefono"
                    placeholder="telefono"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={telefono}
                />



                <button onClick={actualizar} className="btn btn-primary act" type="submit" >
                    Actualizar
                </button>
            </div>

            <p className="nota">NOTA: Llene solo los campos que quiere editar, si no desea editar cierta informanción dejar en blanco.</p>
        </>

    );
};

export default FormularioActualizar;

