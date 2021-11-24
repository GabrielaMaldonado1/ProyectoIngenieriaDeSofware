import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { findUser } from "../../data/PruebaUsuarios";
import m from "../../data/img/usuarios_image/user.png"
import "../../css/vendor/bootstrap/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

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

const MyUser = ( ) => {
    
    const [usuarioActiv, setuUsuarioActiv] = useState({})
    const [checking, setChecking] = useState(true);
    const { user } = useSelector( state => state.user)

    const history = useHistory();


    const cambiarInfo = (e) =>{
        history.push('/CambiarInfo');
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
        return(
            <div className="cargando">
                <div class="preloader"></div>
                <h1>Cargando informanción</h1>
            </div>
            
            
        )
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <img src={m} alt="user" width="150px" />
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

    const [usuarioActiv, setuUsuarioActiv] = useState({})
    const [checking, setChecking] = useState(true);
    const { user } = useSelector( state => state.user)


    useEffect(() => {
       user.map((producto, index) => {

        setuUsuarioActiv(producto)

        setTimeout(() => {
             setChecking(false)
         }, 1500);
    })
    }, [])

    if (checking) {
        return(
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
            Mas resientes
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>fecha</th>
                    <th>hora</th>
                    <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>10/10/2021</td>
                    <td>11:26 am</td>
                    <td>Vestido color fusia, talla "M"</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>12/11/2021</td>
                    <td>10:30 am</td>
                    <td>Camisa de mujer color ocre talla "M"</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>10/12/2021</td>
                    <td>4:30 pm</td>
                    <td>Pantalon de hombre talla "36"</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
};

export default ViewUser