import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { UseStateUser } from "../hooks/UseStateUser";
import { GetUserId, updateUserByUid } from "../hooks/UseAxiosGets";
import { async } from "@firebase/util";
import { useEffect } from "react";

export const FormularioActualizar = () => {
    const [user, setUser] = useState({
        uid: "",
        nombre: "",
        email: "",
        apellido: "",
        departamento: "",
        ciudad: "",
        direccion: "",
        telefono: "",
    });

    const { id } = useParams();

    const { nombre, apellido, email, departamento, ciudad, direccion, telefono } = user;

    const userActive = UseStateUser();
    const history = useHistory();
    const [error, setError] = useState(false);

    useEffect(() => {

        obetnerUsuario();

    }, [])

    const obetnerUsuario = async () => {
        const response = await GetUserId(id);

        const { nombre, apellido, departamento, ciudad, email, direccion, telefono, uid } = response[0];

        setUser({
            nombre,
            email,
            apellido,
            departamento,
            ciudad,
            direccion,
            telefono,
            uid
        });

    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const PintarError = () => (
        <div className="alert alert-danger">Campos obligatorios</div>
    );


    const actualizar = async () => {
        console.log(user);

        // cambiar en este metodo la variable de user.id por el id de la otra forma que se obtenga
        const res = await updateUserByUid(user.uid, user);
        const { data, status } = res;

        if (status === 200) {
            console.log(data)
            history.push("/infoUserRegistro");
        }

    }


    return (

        <>
            {error && <PintarError />}

            <div >
                <h3> Registro de usuario </h3>
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



                <button onClick={actualizar} className="btn btn-primary" type="submit" >
                    Actualizar
                </button>
            </div>
        </>

    );
};

export default FormularioActualizar;

