import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';

export const ItemNuevoVendido = ({ element }) => {

    const history = useHistory();

    const detalles = () => {
        history.push(`/detalles_de_producto/${element._id}`)
    }

    return (
        <div class="text-center item_home" onClick={detalles}>
            <div class="column_page prod">
                <div class="product-img">
                    <p class="tag"><span class="new">New</span></p>
                    
                    <img src={element.imgUrl} alt="altproducto" width="100%" />

                </div>
                <div class="column_page infoProdu_home">
                    <h3>{element.name}</h3>
                    <p class="price"><span>{element.precio} LPS.</span></p>
                    
                </div>
            </div>
        </div>
    )
}
