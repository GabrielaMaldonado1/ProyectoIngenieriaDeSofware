import React from 'react'
import pruebaimg from '../../data/img/Productos/1.jpeg'

export const InfoItem = ( {producto} ) => {
    return (
        <div className="informacionItem row_carrito">

            <div className="imgDiv__infoItem">
                <img className="imgProducto" src={producto.imgUrl}></img>
            </div>

            <div className="detalles column_carrito">
                <h5>{producto.name}</h5>
                <p>COLOR: {producto.color}</p>
                <p>TALLA: {producto.talla} </p>
            </div>
            
        </div>
    )
}
