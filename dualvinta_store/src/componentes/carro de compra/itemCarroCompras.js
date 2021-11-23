import React from 'react'
import { InfoItem } from './infoItem'

export const ItemCarroCompras = () => {
    return (
        
        <div className="column">

<div className="itemCarro row">

            <div className="cantidad column">
                <input className="CantidadNumber" type="number"></input>
                <input className="RemoverItem" type="button" value="Remover"></input>
            </div>

            <div className="item">
                <InfoItem />
            </div>

            <div className="diasEntrega">
                <p>Viernes, 12 de noviembre de 2021</p>
            </div>

            <div className="precioindiv">
                <p> 450.00 LPS.</p>
            </div>

            <div className="precioTotal">
                <p> 450.00 LPS.</p>
            </div>

        </div>

        <div className="separador"></div>
        </div>
        
        
    )
}
