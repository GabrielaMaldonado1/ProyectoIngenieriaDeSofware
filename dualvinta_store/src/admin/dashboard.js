import React, { useState } from 'react'
import { FormProducto } from './components/formProducto';

import './cssAdmin.css';

export const Dashboard = () => {
    
    const [screen, setScreen] = useState(<FormProducto />);

    function setScreens(e) {
        if (e === 1) {
            setScreen(<FormProducto />)
        } else if (e === 2) {
           
        } else if (e === 3) {
            
        };
    };
    
    return ( 
        <div className="dashboard row">
            <div className="opciones column">
                <button className="btn_opc" onClick={() => setScreens(1)} >Añadir Producto</button>
                <button className="btn_opc" onClick={() => setScreens(2)} >Añadir Categoria</button>
                <button className="btn_opc" onClick={() => setScreens(3)} >Añadir Algo XD</button>
            </div>

            <div className="formularioScreen">
                {screen}
            </div>
            
        </div>
    )
}
