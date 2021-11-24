import React from 'react'
import { ItemCarroCompras } from '../componentes/carro de compra/itemCarroCompras'
import Footer from '../componentes/Footer';
import { Header } from '../componentes/Header/header'
import '../css/cssCarrito.css';

export const CarroCompras = () => {
    return (
        <>

        <Header seccion="carrito" titulo="CARRO DE COMPRAS" />
        
        <div className="carroCompras column_carrito">
            
            <div className="headerCarrito row_carrito">

                <div className="titulo">
                    <div className="precios column_carrito">
                        <div className="subtotal__carrito row_carrito">
                            
                            <div className="p_precios">
                                 <p>SubTotal</p>
                            </div>

                            <div className="numPrecio">
                                <p >1500</p> 
                            </div>

                            <p className="LPS">Lps.</p>
                           
                           
                        </div>
                        <div className="impuesto__carrito row_carrito">
                            
                            <div className="p_precios">
                                 <p>Impuesto</p>
                            </div>
                            
                             <div className="numPrecio">
                                <p >500</p> 
                            </div>

                            <p className="LPS">Lps.</p>
                        </div>
                        <div className="total__carrito row_carrito">
                            
                            <div className="p_precios">
                                <p>Total</p>
                            </div>
                            
                             <div className="numPrecio">
                                <p >2000</p> 
                            </div>
                                 
                            <p className="LPS">Lps.</p>
                        </div>
                    </div>
                </div>

                <div className="informacionPagar">
                    <div className="informacion">
                        <p>Cualquier problema en la entrega de su producto por favor comunicarse al numero <b>+504 8457-85XX</b> </p>
                    </div>

                    <div className="BotonPagar">
                        <a>PAGAR</a>
                    </div>
                </div>
                
            </div>

            <hr></hr>

            <div className="bodyCarrito column_carrito">

                <div className="Header__bodyCarrito row_carrito">
                    <div className="header__bodyCarrito__Cantidad textCenter">
                        <h3>Cantidad</h3>
                    </div>
                    <div className="header__bodyCarrito__Producto textCenter">
                        <h3>Producto</h3>
                    </div>
                    <div className="header__bodyCarrito__Fecha textCenter">
                        <h3>Fecha agregado</h3>
                    </div>
                    <div className="header__bodyCarrito__Precio textCenter">
                        <h3>Precio</h3>
                    </div>
                    <div className="header__bodyCarrito__Total textCenter">
                        <h3>Total</h3>
                    </div>
                </div>

                <div className="items__bodyCarrito column_carrito">
                <ItemCarroCompras />
                <ItemCarroCompras />
                </div>

            </div>
            
        </div>

        <Footer />
        </>
    )
}
