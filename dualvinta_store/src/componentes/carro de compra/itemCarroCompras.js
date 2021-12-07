import React, { useEffect, useState } from 'react'
import { InfoItem } from './infoItem'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useHistory } from 'react-router';

export const ItemCarroCompras = ({productoID}) => {

    const history = useHistory();
    
    const { data } = useSelector(state => state.producto);

    const id = productoID.producto_id;
    const [update, setUpdate] = useState(true);
    const [productoData, setProducto] = useState({});

    useEffect(() => {
        if (update) {
            setUpdate(false);

            data.map((producto, index) => {

                if ( producto._id === id) {

                   setProducto(producto);
                }
            }
            )
     
        };
    }, [update, id]);

    const remover = () => {
        axios.delete(`https://dualvinta.herokuapp.com/api/carroItem/${productoID._id}`)

        setTimeout(() => {
            history.replace("carroCompras")
        }, 500);

    }
    
    
    return (
        
        <div className="column_carrito">

<div className="itemCarro row_carrito">

            <div className="cantidad column_carrito">
                <input className="CantidadNumber" type="number" value="1"></input>
                <input className="RemoverItem" type="button" value="Remover" onClick={remover}></input>
            </div>

            <div className="item_carrito">
                <InfoItem producto={productoData}/>
            </div>

            <div className="diasEntrega">
                <p>Viernes, 12 de noviembre de 2021</p>
            </div>

            <div className="precioindiv">
                <p>{productoData.precio}</p>
            </div>

            <div className="precioTotal">
                <p> 450.00 LPS.</p>
            </div>

        </div>

        <div className="separador"></div>
        </div>
        
        
    )
}
