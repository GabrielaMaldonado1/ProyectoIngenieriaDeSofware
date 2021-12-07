import React from 'react'
import { CategoriasGeneral } from '../CategoriasGeneral'

export const AreaSeccionCategoria = ({ titulo, opciones }) => {
    return (
        <div className="Area__Categoria">

            <CategoriasGeneral titulo={titulo} opciones={opciones}/>
            

        </div>
    )
}
