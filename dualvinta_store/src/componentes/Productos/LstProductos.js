import React, { useEffect, useState } from "react";

import "../../css/vendor/bootstrap/css/bootstrap.min.css";
import { getProductoCuidadoByFilter, gp } from "../../services/productos.service";
import ViewProducto from "./ViewProducto";

var LstProductos = ({ titulo, filtro }) => {

    const [productos, SetProductos] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(() => {
        if (update) {
            gp("vacio").then(v=>{
                if(v.data.successed){
                    SetProductos(v.data.data);
                };
            });
            setUpdate(false);
        };
    }, [update, productos]);

    async function search(e) {
        var txt = e.target.value;
        if(txt.length < 3){
            txt="vacio"
        }
        gp(txt).then(v=>{
            if(v.data.successed){
                SetProductos(v.data.data);
            };
        });
    };

    return (
        <div className="container-fluid rounded shadow-sm">
            <div className="row">
                <div className="col-md-8 py-3">
                    <h3 className=""><b>{titulo}</b></h3>
                </div>
                <div className="col-md-4 py-3">
                    <input className="form-control" placeholder="Busqueda" onChange={search} />
                </div>
            </div>
            <hr style={{ backgroundColor: "#F5DA81" }} />
            <div className="row" style={{}}>
                {
                    productos.map((producto, index) => 
                        <ViewProducto key={index} element={producto} />
                    )
                }
            </div>
        </div>
    )
};


export default LstProductos;
