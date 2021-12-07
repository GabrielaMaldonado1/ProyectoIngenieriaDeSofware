import React, { useState } from 'react'
import { Header } from '../componentes/Header/header';
import "../css/pages.css";

export const Pagar = () => {
    const [todo, setTodo] = useState({
        nombrecorreo: "",
        contrasena: "",
        nombres: "",
        apellidos: "",
        nombreEmpresa: "",
        direccion: "",
        ciudad: "",
        condado: "",
        coPostal: "",
        email: "",
        telefono: "",


    });

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nombres, apellidos, nombreEmpresa, direccion, ciudad, condado, coPostal, email, telefono, nombrecorreo, contrasena
        } = todo;

        if (!nombres.trim() || !apellidos.trim() || !nombreEmpresa.trim() || !direccion.trim() || !ciudad.trim() || !condado.trim() || !coPostal.trim() || !email.trim() || !telefono.trim() || !nombrecorreo.trim() || !contrasena.trim()) {
            setError(true);
            return;
        }

        setError(false);

        console.log(todo);

        setTodo({
            nombrecorreo: "",
            nombres: "",
            apellidos: "",
            nombreEmpresa: "",
            direccion: "",
            ciudad: "",
            condado: "",
            coPostal: "",
            email: "",
            telefono: "",



        });
    };

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const PintarError = () => (
        <div className="alert alert-danger">Campos obligatorios</div>
    );

    return (

        <>

        <Header seccion="none" titulo="REALIZAR PAGO" />   

            <div className="division_pagar_general">

                <div className="datos_col1_pagar">
                    {error && <PintarError />}

                    <form onSubmit={handleSubmit}>

                    <h3>FACTURACION Y ENVIÓ</h3>


                    <p id="billing_first_name_field" class ="form-row form-row-first validate-required">
                    <label class ="" for="billing_first_name"> Pais <abbr title="required" class ="required">*</abbr>
                    </label>
                    <select class ="country_to_state country_select select_pagar_pais" id="billing_country" name="billing_country">
                    <option value="">Select a country…</option>
                    <option value="AX">Honduras</option>
                    </select>
                    </p>

                    <p id="billing_first_name_field" class ="form-row form-row-first validate-required">
                    <label class ="" for="billing_first_name">Nombre <abbr title="required" class ="required">*</abbr>
                    </label>

                    <input name="nombres"
                    placeholder="nombre"
                    type ="text"
                    className="form-control_pagar"
                    onChange={handleChange}
                    value={todo.nombres}>
                    </input>
                    </p>

                    <p id="billing_first_name_field" class ="form-row form-row-first validate-required">
                    <label class ="" for="billing_first_name">Apellido <abbr title="required" class ="required">*</abbr>
                    </label>
                    <input name="apellidos"
                    placeholder="apellido"
                    type ="text"
                    className="form-control_pagar"
                    onChange={handleChange}
                    value={todo.apellidos}>
                    </input>
                    </p>

                    <p id="billing_first_name_field" class ="form-row form-row-first validate-required">
                    <label class ="" for="billing_first_name">Nombre de la empresa <abbr title="required" class ="required">*</abbr>
                    </label>
                    <input
                    name="nombreEmpresa"
                    placeholder="nombreEmpresa"
                    type ="text"
                    className="form-control_pagar"
                    onChange={handleChange}
                    value={todo.nombreEmpresa}
                    />
                    </p>
                    <p id="billing_first_name_field" class ="form-row form-row-first validate-required">
                    <label class ="" for="billing_first_name">Direccion <abbr title="required" class ="required">*</abbr>
                    </label>
                    <input
                    name="direccion"
                    placeholder=" direccion"
                    type ="text"
                    className="form-control_pagar"
                    onChange={handleChange}
                    value={todo.direccion}
                    />
                    </p>

                    <p id="billing_first_name_field" class ="form-row form-row-first validate-required">
                    <label class ="" for="billing_first_name">Ciudad <abbr title="required" class ="required">*</abbr>
                    </label>
                    <input
                    name="ciudad"
                    placeholder="ciudad"
                    type ="text"
                    className="form-control_pagar"
                    onChange={handleChange}
                    value={todo.ciudad}
                    />
                    </p>

                    <p id="billing_first_name_field" class ="form-row form-row-first validate-required">
                    <label class ="" for="billing_first_name">Condado <abbr title="required" class ="required">*</abbr>
                    </label>
                    <input
                    name="condado"
                    placeholder=" condado"
                    type ="text"
                    className="form-control_pagar"
                    onChange={handleChange}
                    value={todo.condado}
                    />
                    </p>
                    <p id="billing_first_name_field" class ="form-row form-row-first validate-required">
                    <label class ="" for="billing_first_name">Codigo postal <abbr title="required" class ="required">*</abbr>
                    </label>
                    <input
                    name="coPostal"
                    placeholder="coPostal"
                    type ="text"
                    className="form-control_pagar"
                    onChange={handleChange}
                    value={todo.coPostal}
                    />
                    </p>
                    <p id="billing_first_name_field" class ="form-row form-row-first validate-required">
                    <label class ="" for="billing_first_name">Correo electronico <abbr title="required" class ="required">*</abbr>
                    </label>
                    <input
                    name="email"
                    placeholder="email"
                    type ="text"
                    className="form-control_pagar"
                    onChange={handleChange}
                    value={todo.email}
                    />
                    </p>
                    <p id="billing_first_name_field" class ="form-row form-row-first validate-required">
                    <label class ="" for="billing_first_name">Telefono <abbr title="required" class ="required">*</abbr>
                    </label>
                    <input
                    name="telefono"
                    placeholder="telefono"
                    type ="text"
                    className="form-control_pagar"
                    onChange={handleChange}
                    value={todo.telefono}
                    />

                    </p>
                   

                    <button className="btn btn-primary btn_margin_pagar" type="submit" >
                    Realizar pedido
                </button>
            </form>

                </div>

                <div class="detalles_table_shop">
                    <h3 id="order_review_heading">SU PEDIDO</h3>


                    <table class="shop_table">
                        <thead>
                            <tr>
                                <th class="product-name">Productos</th>

                                <th class="product-total">Total</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th class="product-name">Tenis deportivo</th>
                                <th class="product-total">1800 LPS</th>
                            </tr>
                            <tr>
                                <th class="product-name">Camiseta venca</th>
                                <th class="product-total">250 LPS</th>
                            </tr>
                            <tr>
                                <th class="product-name">Sudadera Absolute</th>
                                <th class="product-total"> 1500 LPS</th>
                            </tr>
                        </thead>

                        <tfoot>

                            <tr class="cart-subtotal">
                                <th> Subtotal</th>
                                <td><strong><span class="amount">LPS.3550</span></strong> </td>
                            </tr>

                            <tr class="shipping">
                                <th>envio y manipulacion</th>
                                <td><strong><span class="amount">envió gratis</span></strong> </td>
                            </tr>


                            <tr class="order-total">
                                <th>Total</th>
                                <td><strong><span class="amount">LPS.3550</span></strong> </td>
                            </tr>

                        </tfoot>
                    </table>
                </div>






                

        </div>
        
        </>
    );
};


