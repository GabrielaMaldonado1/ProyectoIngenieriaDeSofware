
import React, { useEffect, useState } from "react";
import ViewProducto from "./ViewProducto";

import "../../css/vendor/bootstrap/css/bootstrap.min.css";
import "../../css/pages.css";
import dbProductos, { searchByName, sortByDate } from "../../data/PruebaProductos";
import { useSelector } from 'react-redux'


export const LstProductoFiltro = ( { filtro, categoria} ) => {

    const {data} = useSelector( state => state.producto);

    function search(e){
        if(e.target.value === ""){
           
        };
        const t = searchByName(data, e.target.value);
       
    }

    return (
        <div className="container-fluid rounded shadow-sm nuevo_home">
            <div className="row">
                <div className="col-md-8 py-3">
                    <h3 className="Titulo_home"><b>{filtro}</b></h3>
                </div>
                <div className="col-md-4 py-3">
                    <input className="form-control search_secciones_home" placeholder="Busqueda" onChange={search} />
                </div>
            </div>
            <hr style={{ backgroundColor: "#F5DA81" }} />
            <div className="row" style={{}}>
                {
                    data.map((producto, index) => {

                        if ( (producto.categoria === categoria) && (producto.filtro === filtro)) {
                            
                            return <ViewProducto key={index} element={producto} />
                        }}
                    )
                
                
                }
            </div>
        </div>

    )
};


export default LstProductoFiltro;
