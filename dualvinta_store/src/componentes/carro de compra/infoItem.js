import React from 'react'
import pruebaimg from '../../data/img/Productos/1.jpeg'

export const InfoItem = () => {
    return (
        <div className="informacionItem row">

            <div className="imgDiv__infoItem">
                <img className="imgProducto" src={pruebaimg}></img>
            </div>

            <div className="detalles column">
                <h5>Camisa botones UwU</h5>
                <p>COLOR: Verde</p>
                <p>TALLA: M </p>
            </div>
            
        </div>
    )
}
