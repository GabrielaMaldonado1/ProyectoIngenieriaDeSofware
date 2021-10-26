import React from 'react'
import GifGrid from '../componentes/Categorias/CategorySalud/GifGrid'
import { Header } from '../componentes/Header/header'

const CuidadoPersonal = () => {
    return (
        <div>
            <Header seccion="cuidado" titulo="CUIDADO PERSONAL"/>
            <GifGrid title="CUIDADO PERSONAL" category="CUIDADO PERSONAL" />
        </div>
    )
};

export default CuidadoPersonal;