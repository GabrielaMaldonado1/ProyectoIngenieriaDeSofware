import React, { useEffect, useState } from "react";
import ViewProducto from "./ViewProducto";

import "../../css/vendor/bootstrap/css/bootstrap.min.css";
import "../../css/pages.css";
import dbProductos, { searchByName, sortByDate } from "../../data/PruebaProductos";
import { useSelector } from 'react-redux';
import { getProductoByFilter } from "../../services/productos.service";

export const LstProductoAllData = ({ titulo, filtro, filtro2="none" }) => {

    const [d, setD] = useState([]);
    const [upd, setUpd] = useState(false);
    const { data } = useSelector(state => state.producto);

    async function search(e) {
        const txt = e.target.value;
        await getProductoByFilter(txt).then(v => {
            if (v) {
                if (v.data.successed) {
                    setD(v.data.data);
                } else {
                    setD([])
                };
            }
        });
    };

    useEffect(() => {
        if (!upd) {
            setD([]);
            setUpd(true);
        }
    }, [upd, d]);

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
            {(d.length === 0) ?
                <div className="row" style={{}}>
                    {
                        data.map((producto, index) => {
                            
                            if (producto.categoria === filtro) {
                                return <ViewProducto key={index} element={producto} />
                            } else if (producto.categoria === filtro2) {
                                return <ViewProducto key={index} element={producto} />
                            }
                        })
                    }
                </div>
                :
                <div className="row" style={{}}>
                    {
                        d.map((producto, index) =>{
                            if (producto.categoria === filtro) {
                                return <ViewProducto key={index} element={producto} />
                            } else if (producto.categoria === filtro2) {
                                return <ViewProducto key={index} element={producto} />
                            }
                        }
                          
                        )
                    }
                </div>
            }
        </div>

    )
};


export default LstProductoAllData;

