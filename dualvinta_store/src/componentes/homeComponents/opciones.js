import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';

export const OpcionesHome = () => {

    const history = useHistory();

    const femenina = (e) => {
        e.preventDefault();
        history.push('/resultadoCategoria/Ropa%20Femenina');
    }

    const masculina = (e) => {
        e.preventDefault();
        history.push('/resultadoCategoria/Ropa%20Masculina');
    }

    return (
        <section class="top_catagory_area">

            <div class="single_catagory_area_1" onClick={femenina}>
                <div class="catagory-content">
                    <h6>Vistete a la moda, elige tu outfit perfecto.</h6>
                    <h2>Selección Femenina</h2>
                    <h5 class="bolds">COMPRA AHORA</h5>
                    
                </div>
            </div>

            <div class="single_catagory_area_2" onClick={masculina}>
                <div class="catagory-content_2">
                    <h6 >Para esta navidad vistete con lo ultimo en moda.</h6>
                    <h2>Selección Masculina</h2>
                    <h5 class="bolds fontWhite">COMPRA AHORA</h5>
                </div>
            </div>
        </section>
    )
}
