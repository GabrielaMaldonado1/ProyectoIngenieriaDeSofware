import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findUser } from "../../data/PruebaUsuarios";
import m from "../../data/img/usuarios_image/user.png"
import "../../css/vendor/bootstrap/css/bootstrap.min.css";
import { Table } from 'react-bootstrap';


const ViewUser = () => {

    const [screen, setScreen] = useState(<MyUser />);

    function setScreens(e) {
        if (e === 1) {
            setScreen(<MyUser />)
        } else if (e === 2) {
            setScreen(<Direcciones />)
        } else if (e === 3) {
            setScreen(<Ordenes />)
        };
    };

    return (
        <div className="rounded shadow-sm container-fluid py-4" style={{ marginTop: 40 }}>
            <h4 className="py-2"><b>Panel de Usuario</b></h4>
            <hr style={{ backgroundColor: "#F5DA81" }} />
            <div className="row">
                <div className="col-md-3">
                    <div className="row">
                        <button className="btn btn-light col-md-11" onClick={() => setScreens(1)} >Mi Perfil</button>
                        <button className="btn btn-light col-md-11" onClick={() => setScreens(2)} >Mis Direcciones</button>
                        <button className="btn btn-light col-md-11" onClick={() => setScreens(3)} >Mis Ordenes</button>
                        <button className="btn btn-light col-md-11" >Configuracion</button>
                    </div>
                </div>
                <div className="col-md-9">
                    {screen}
                </div>
            </div>
        </div>
    )
};

const MyUser = () => {
    const [update, setUpdate] = useState(true);
    const [usuario, setUsuario] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (update) {
            //funcion que trae los datos de la base de datos;
            const t = findUser(id);
            setUsuario(t);
            setUpdate(false);
        };
    }, [update]);

    return (
        <div className="row">
            <div className="col-md-3">
                <img src={usuario.imagen? usuario.imagen : m} alt="user" width="150px" />
            </div>
            <div className="col-md-9">
                <h3 style={{ marginBottom: 20 }}><b>{usuario.nombre}</b></h3>
                <h6>Email: {usuario.email}</h6>
                <h6>Nombre: {usuario.nombre}</h6>
                <h6>Id: {usuario.id}</h6>
                <h6>Telefono: {usuario.telefono}</h6>
                <h6>Genero: {usuario.genero}</h6>
            </div>
            <div className="col-sm-12 text-right">
                <button className="btn btn-outline-success">Editar Perfil</button>
            </div>
        </div>
    )
};

const Direcciones = () => {
    return (
        <div>
            Mis Direcciones
        </div>
    )
};

const Ordenes = () => {
    return (
        <div>
            Mas recientes
            
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>13/12/2021</td>
                    <td>10:30 AM</td>
                    <td>Vestido de mujer, color ocre, talla "M"</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>5/10/2021</td>
                    <td>4:30 pm</td>
                    <td>Vestido de mujer, color ocre, talla "M"</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>25/9/2021</td>
                    <td>12:15 md</td>
                    <td>Vestido de mujer, color ocre, talla "M"</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
};

export default ViewUser