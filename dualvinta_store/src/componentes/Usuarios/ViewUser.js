import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { findUser } from "../../data/PruebaUsuarios";
import m from "../../data/img/usuarios_image/user.png"
import "../../css/vendor/bootstrap/css/bootstrap.min.css";
import { Table } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { subirFotoAPi } from '../../services/usuarios.service';

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

    //mongodb+srv://root:<password>@inventory.l4vee.mongodb.net/test

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

    const [usuarioActiv, setuUsuarioActiv] = useState({})
    const [checking, setChecking] = useState(true);
    const { user } = useSelector(state => state.user);
    const [urlImagen, setUrlImagen] = useState(null)

    const history = useHistory();


    const cambiarInfo = () => {
        history.push(`/actualizar-usuario/${usuarioActiv.uid}`);
    }

    useEffect(() => {
        user.map((producto, index) => {

            setuUsuarioActiv(producto)
            setTimeout(() => {
                setChecking(false)
            }, 1500);
        })
    }, [])

    if (checking) {
        return (
            <div className="cargando">
                <div class="preloader"></div>
                <h1>Cargando informanción</h1>
            </div>


        )
    }

    const subirFoto = async () => {
        document.getElementById('img-perfil').click();
    }

    const obtenerFoto = async (e) => {
        const formData = new FormData();

        formData.append('imagen', e.target.files[0]);

        const response = await subirFotoAPi(formData, usuarioActiv.uid);

        if (response.status == 200) {

            setUrlImagen(response.data.urlImagen);
            usuarioActiv.urlImagen = response.data.urlImagen;
            console.log(response)
        }

    }

    return (
        <div className="row">
            <div className="col-md-3 text-center">
                <img src={`http://localhost:9000/api/users/img-perfil/${usuarioActiv.urlImagen}`} alt="user" width="150px" />
                <button onClick={subirFoto} className="btn btn-sm btn-warning m-2 btn-block" >Actualizar foto</button>
                <input onChange={obtenerFoto} type="file" className="d-none" id="img-perfil" />
            </div>
            <div className="col-md-9">
                <h3 style={{ marginBottom: 20 }}><b>{usuarioActiv.nombre}</b></h3>
                <h6>Email: {usuarioActiv.email}</h6>
                <h6>Nombre: {usuarioActiv.nombre + " " + usuarioActiv.apellido}</h6>
                <h6>Telefono: {usuarioActiv.telefono}</h6>
            </div>
            <div className="col-sm-12 text-right">
                <button className="btn btn-outline-success" onClick={cambiarInfo}>Editar Perfil</button>
            </div>
        </div>


    )

};







const Direcciones = () => {

    const [usuarioActiv, setuUsuarioActiv] = useState({});
    const [checking, setChecking] = useState(true);
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        user.map((producto, index) => {

            setuUsuarioActiv(producto)
        })

        setTimeout(() => {
            setChecking(false)
        }, 1500);

    }, [])

    if (checking) {
        return (
            <div className="cargando">
                <div class="preloader"></div>
                <h1>Cargando informanción</h1>
            </div>


        )
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numero de direccion</th>
                        <th>Pais</th>
                        <th>Departamento</th>
                        <th>Ciudad</th>
                        <th>Carretera</th>
                        <th>Telefono</th>
                        <th>Numero de orden</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Honduras</td>
                        <td>{usuarioActiv.departamento}</td>
                        <td>{usuarioActiv.ciudad}</td>
                        <td>{usuarioActiv.direccion}</td>
                        <td>{usuarioActiv.telefono}</td>
                        <td>1</td>
                    </tr>

                </tbody>
            </Table>
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