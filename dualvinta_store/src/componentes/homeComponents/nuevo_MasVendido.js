import React, { useState } from 'react'
import { ItemNuevoVendido } from './itemNuevoVendido';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

export const Nuevo_MasVendido = ({ titulo, filtro }) => {

    const { data } = useSelector(state => state.producto);
    let i = 0;
   let j = 0;
   


    return (
        <>
            <div class="row_page titulo_home_seccion">
                <div class="col-md-6 col-md-offset-3 text-center colorlib-heading">

                    <div className="row_page just">
                        <div className="subrayado_titulo"></div>
                        <h2 className="titulo_seccion"><span>{titulo}</span></h2>
                        <div className="subrayado_titulo"></div>
                    </div>


                    <p>¡En Dualvinta tenemos productos nuevos cada semana! Aqui te dejamos lo nuevo esperando te guste algo, no olvides darle al botón para ver mas productos.</p>
                </div>
            </div>

            <div className="row_page seccion_home" style={{}}>

                {


                    data.map((producto, index) => {

                        if (i < 3 && (producto.vendido === filtro)) {
                            i++;
                            return <ItemNuevoVendido key={index} element={producto} />
                        } else if (j < 3 && (producto.nuevo === filtro)) {
                            j++;
                            return<ItemNuevoVendido key={index} element={producto} />
                        }


                    })
                }
                <div className="Ver_Mas">
                    <Link to={`/producto/${filtro}`}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots icon_more" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="12" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="19" cy="12" r="1" />
</svg></Link>
                </div>
            </div>



        </>
    )
}
