import React from "react";
import { Header } from '../componentes/Header/header'
import ViewUser from "../componentes/Usuarios/ViewUser";
import Footer from '../componentes/Footer';

const DetallesUsuario = () => {
  
    return(
        <div>
            <Header seccion="none" titulo="PERFIL" />
            <ViewUser />
        <Footer />

        </div>
    )
};

export default DetallesUsuario;