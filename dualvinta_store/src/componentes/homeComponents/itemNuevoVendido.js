import React from 'react'

export const ItemNuevoVendido = ({ element }) => {
    return (
        <div class="text-center item_home">
            <div class="column prod">
                <div class="product-img">
                    <p class="tag"><span class="new">New</span></p>
                    
                    <img src={element.imgUrl} alt="altproducto" width="100%" />

                </div>
                <div class="column infoProdu_home">
                    <h3>{element.name}</h3>
                    <p class="price"><span>{element.precio} LPS.</span></p>
                    <p className="cart">Agrega al carro <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                        <path d="M15 6h6m-3 -3v6" />
                    </svg></p>
                </div>
            </div>
        </div>
    )
}
