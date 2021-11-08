//import img4 from "../data/img/4.jpeg";

import img4 from "../../../data/img/Productos/4.jpeg";
import img5 from "../../../data/img/Productos/5.jpeg";
//import img5 from "../data/img/5.jpeg";

import React from 'react'
import { useState, useEffect } from 'react';
import { GrifGridItem } from './GrifGridItem';

export const GifGrid = ({category}) => {
    const [images, setimages] = useState([]);

    useEffect(()=>{
        getGifs();
    }, [])

    const getGifs = async()=>{
        const dbProductos = [
            {
                id:"4",
                nombre: "Producto 4",
                precio: 189,
                //fecha: new Date().toDateString(),
                detalles: "Esta es la descripcion de muestra de los productos seleecionados!",
                marca:"Patito",
                modelo:"Chino",
                serie:"si es serio",
                categoria: "CUIDADO PERSONAL",
                cantidad: 105,
               imagen: img4,
                ventas_totales: 1,
            },
            {
                id:"5",
                nombre: "Producto 5",
                precio: 12000,
                //fecha: new Date().toDateString(),
                detalles: "Esta es la descripcion de muestra de los productos seleecionados!",
                marca:"Patito",
                modelo:"Chino",
                serie:"si es serio",
                categoria: "CUIDADO PERSONAL",
                cantidad: 10,
                imagen: img5,
                ventas_totales: 9,
            },
        ];

        console.log(dbProductos);
        setimages(dbProductos);
    }
    //getGifs();
    return (
        <>
        <h3>{category}</h3>
        <div className="card-grid">
                {
                    images.map( img=>(
                        < GrifGridItem
                            key ={img.id}
                            {...img} 
                        />
                    ))
                }
            
        </div>
        </>
    )
}
