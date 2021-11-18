import React, { useState } from 'react'
import axios from 'axios';

export const FormProducto = () => {

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    const [formState, setFormState] = useState({
        name: '',
        categoria: '',
        descripcion: '',
        marca: '',
        modelo: '',
        precio: '',
        existencias: '',
        fecha: hoy.toDateString(),
        imgUrl: ''
    });

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        });

    };

    const AddProducto = (e) => {
        
        const url = "http://localhost:9000/api/producto";
        axios.post(url, formState);

    };

    console.log(formState);

    return (
        <section className="">
            <div className="">
                <form className="formulario-login">

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" autoComplete="off" name="name" aria-describedby="inputGroup-sizing-default" onChange={handleInputChange}></input>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">categoria</span>
                        <input type="text" class="form-control inputForm" aria-label="Sizing example input" name="categoria" aria-describedby="inputGroup-sizing-default" onChange={handleInputChange}></input>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">descripcion</span>
                        <input type="text" class="form-control inputForm" aria-label="Sizing example input" autoComplete="off" name="descripcion" placeholder="poner la talla" aria-describedby="inputGroup-sizing-default" onChange={handleInputChange}></input>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">marca</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" autoComplete="off" name="marca" aria-describedby="inputGroup-sizing-default" onChange={handleInputChange}></input>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">modelo</span>
                        <input type="text" class="form-control inputForm" aria-label="Sizing example input" autoComplete="off" name="modelo" aria-describedby="inputGroup-sizing-default" onChange={handleInputChange}></input>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">precio</span>
                        <input type="text" class="form-control inputForm" aria-label="Sizing example input" autoComplete="off" name="precio" aria-describedby="inputGroup-sizing-default" onChange={handleInputChange}></input>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">existencias</span>
                        <input type="text" class="form-control inputForm" aria-label="Sizing example input" autoComplete="off" name="existencias" aria-describedby="inputGroup-sizing-default" onChange={handleInputChange}></input>
                    </div>
                    
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">imgUrl</span>
                        <input type="text" class="form-control inputForm" aria-label="Sizing example input" name="imgUrl" autoComplete="off" placeholder="http://localhost:9000/public/" aria-describedby="inputGroup-sizing-default" onChange={handleInputChange}></input>
                    </div>

                    <p> USAR "http://localhost:9000/public/" en imgURL y luego el nombre del archivo</p>


                    <input className="btn__login" type="submit" value="Añadir Producto" onClick={AddProducto} ></input>

                </form>

            </div>
        </section>
    )
}
