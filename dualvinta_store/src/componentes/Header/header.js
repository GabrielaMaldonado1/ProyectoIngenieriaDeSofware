import React from 'react'
import { NavegacionPaginas } from './navPagHeader';
import { MarcoPaginaActual } from './marcoPaginaActual';
import { HeaderLogo } from './LogoCarBuscarHeader';
import { Publicidad } from '../publicidad/Publicidad';

import '../../css/cssHeader.css';
import { HeaderNavUser } from './UserNav';
//import { publis } from '../Categorias/CategorySalud/publis';


export const Header = ( {seccion, titulo, userActive}) => {
    
    
    return (
        <div className=" header-bg">
            <HeaderNavUser userActive={userActive} />            
            <HeaderLogo />
            <NavegacionPaginas seccion={seccion}/>
            <MarcoPaginaActual titulo={titulo}/>   
            <Publicidad />
        </div>
        
    )
}
