import React from 'react'
import { InfoItem } from './infoItem'

export const ItemCarroCompras = () => {
    return (
        
        <div className="column_carrito">

<div className="itemCarro row_carrito">

            <div className="cantidad column_carrito">
                <input className="CantidadNumber" type="number"></input>
                <input className="RemoverItem" type="button" value="Remover"></input>
            </div>

            <div className="item_carrito">
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
