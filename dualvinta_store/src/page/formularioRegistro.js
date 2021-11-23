import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useHistory } from "react-router";
import  { UseStateUser}  from  "../hooks/UseStateUser";

export const Formulario = () => {
    const [todo, setTodo] = useState({
        nombre: "",
        apellido: "",
        departamento: "",
        ciudad: "",
        direccion: "",
        telefono: "",
      
    });

    const userActive =UseStateUser();
const history = useHistory();
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nombre, apellido,departamento,ciudad, direccion,telefono} = todo;
        
        if (!nombre.trim()  || !apellido.trim()|| !departamento.trim()|| !ciudad.trim() || !direccion.trim()|| !telefono.trim()) {
            setError(true);
            return;
        }

        setError(false);

        console.log(todo);

        setTodo({
            nombre: "",
            apellido: "",
            departamento: "",
            ciudad: "",
            direccion: "",
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

    const registrar = (e) => {
        e.preventDefault();

        const infoGuardar = {
            ...todo,
            email: userActive.email,
            uid: userActive.uid
        }

        const url = "http://localhost:9000/api/users";
           
        axios.post(url, infoGuardar);

        history.push('/')
    }

    return (
        
        <>


            {error && <PintarError />}

            <form onSubmit={registrar}>
                <input
                    name="nombre"
                    placeholder="nombre"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.nombre}
                />
                 <input
                    name="apellido"
                    placeholder="apellido"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.apellido}
                />
                 <input
                    name="departamento"
                    placeholder=" departamento"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.departamento}
                />
                 <input
                    name="ciudad"
                    placeholder="ciudad"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.ciudad}
                />
                 <input
                    name="direccion"
                    placeholder=" direccion"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.direccion}
                />
                 <input
                    name="telefono"
                    placeholder="telefono"
                    type="text"
                    className="form-control mb-2"
                onChange={handleChange}
                    value={todo.telefono}
                />
                


                <button className="btn btn-primary" type="submit" >
                    continuar
                </button>
            </form>
        </>
        
    );
};

export default Formulario;
