import React from 'react'
import { NavegacionPaginas } from './navPagHeader';
import { MarcoPaginaActual } from './marcoPaginaActual';
import { HeaderLogo } from './LogoCarBuscarHeader';

import '../../css/cssHeader.css';
import { HeaderNavUser } from './UserNav';


export const Header = ( {seccion, titulo}) => {
    
    
    return (
        <div className=" header-bg">
            <HeaderNavUser  />            
            <HeaderLogo />
            <NavegacionPaginas seccion={seccion}/>
            <MarcoPaginaActual titulo={titulo}/>
        </div>
    )
}
