import React, { useEffect, useState } from "react";
import ViewProducto from "./ViewProducto";

import "../../css/vendor/bootstrap/css/bootstrap.min.css";
import "../../css/pages.css";
import dbProductos, { searchByName, sortByDate } from "../../data/PruebaProductos";
import { useSelector } from 'react-redux'

const LstProductos = ({ titulo, filtro }) => {

    const [productos, SetProductos] = useState([]);
    const [update, setUpdate] = useState(true);

    const {data} = useSelector( state => state.producto);

    console.log(data)
    useEffect(() => {
        if (update) {
            //crea la funcion que llamara los datos
            SetProductos(data);
            setUpdate(false);
        };
    }, [update]);

    function search(e){
        if(e.target.value === ""){
            setUpdate(true);
        };
        const t = searchByName(productos, e.target.value);
        SetProductos(t);
    }

    console.log(productos)
    return (
        <div className="container-fluid rounded shadow-sm nuevo_home">
            <div className="row">
                <div className="col-md-8 py-3">
                    <h3 className="Titulo_home"><b>{titulo}</b></h3>
                </div>
                <div className="col-md-4 py-3">
                    <input className="form-control search_secciones_home" placeholder="Busqueda" onChange={search} />
                </div>
            </div>
            <hr style={{ backgroundColor: "#F5DA81" }} />
            <div className="row" style={{}}>
                {
                
                     data.map((producto, index) => {

                        if (producto.vendido === filtro) {
                            
                            return <ViewProducto key={index} element={producto} />
                        } else if (producto.nuevo === filtro) {
                           
                            return <ViewProducto key={index} element={producto} />
                        }


                    })
                
                
                }
            </div>
        </div>

    )
};


export default LstProductos;
