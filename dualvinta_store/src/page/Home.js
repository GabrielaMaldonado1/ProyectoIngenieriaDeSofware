import React, { useEffect, useState } from 'react'
import { Header } from '../componentes/Header/header'
import LstProductos, { LstProductos2 } from '../componentes/Productos/LstProductos'
import { UseStateUser } from '../hooks/UseStateUser'
import { OfertasHome } from "../componentes/ofertas.js"
import { BuscarCateoriaLimit, GetAll } from '../hooks/UseAxiosGets';

import "../css/pages.css";



export const Home = () => {

    const [newpro, setNewpro] = useState([]);
    const [vendidos, setVendidos] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect( async () => {
        
        const pro = await BuscarCateoriaLimit("ropa%20femenina").then((response) => {
            console.log(response);
            setNewpro(response.data);
            return response.data;
        })
            .catch((error) => {
                console.log(error);
            });
        
        console.log(pro)
    
    }, []);


    /*useEffect( async () => {
        
        const vendido =  await BuscarCateoriaLimit("Ropa%20masculina").then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });

        setVendidos(vendido);

        
    }, []);

    console.log(newpro);
<LstProductos titulo="NUEVOS PRODUCTOS"  productoArray={newpro.data} />
            <LstProductos titulo="PRODUCTOS MAS VENDIDOS" productoArray={vendidos.data} />
    console.log(vendidos);*/

    return (
        <div>
            <Header seccion="inicio" titulo="INICIO" />

            <OfertasHome />
            {
                if(newpro)
            }

        </div>
    )
}

