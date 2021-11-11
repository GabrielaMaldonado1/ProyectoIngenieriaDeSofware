import React from "react";
import { Header } from '../componentes/Header/header'
import ViewUser from "../componentes/Usuarios/ViewUser";

const DetallesUsuario = () => {
  
    return(
        <div>
            <Header seccion="none" titulo="PERFIL" />
            <ViewUser />
        </div>
    )
};

export default DetallesUsuario;