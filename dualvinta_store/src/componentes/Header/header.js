import React from 'react'
import { NavegacionPaginas } from './navPagHeader';
import { MarcoPaginaActual } from './marcoPaginaActual';
import { HeaderLogo } from './LogoCarBuscarHeader';

import '../../css/cssHeader.css';

export const Header = ( {seccion, titulo}) => {
    
    
    return (
        <div className=" header-bg">
            <HeaderLogo />
            <NavegacionPaginas seccion={seccion}/>
            <MarcoPaginaActual titulo={titulo}/>
           
        </div>
    )
}
