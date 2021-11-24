import React from "react";
import { Header } from '../componentes/Header/header'
import ViewUser from "../componentes/Usuarios/ViewUser";
import Footer from '../componentes/Footer';

const DetallesUsuario = () => {
    console.log("dded")
    return(
        <div>
            <Header seccion="none" titulo="PERFIL" />
            <ViewUser />
        

        </div>
    )
};

export default DetallesUsuario;