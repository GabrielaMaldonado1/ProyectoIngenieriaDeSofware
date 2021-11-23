import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useHistory } from "react-router";
import  { UseStateUser}  from  "../hooks/UseStateUser";

export const Formulario = () => {
    const [todo, setTodo] = useState({
        Nombre: "",
        Apellido: "",
        Departamento: "",
        Ciudad: "",
        Direccion: "",
        Telefono: "",
      
    });

    const userActive =UseStateUser();
const history = useHistory();
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { Nombre, Apellido,Departamento,Ciudad, Direccion,Telefono} = todo;
        
        if (!Nombre.trim()  || !Apellido.trim()|| !Departamento.trim()|| !Ciudad.trim() || !Direccion.trim()|| !Telefono.trim()) {
            setError(true);
            return;
        }

        setError(false);

        console.log(todo);

        setTodo({
            Nombre: "",
            Apellido: "",
            Departamento: "",
            Ciudad: "",
            Direccion: "",
            Telefono: "",
            
        
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
                    value={todo.Nombre}
                />
                 <input
                    name="apellido"
                    placeholder="apellido"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.Apellido}
                />
                 <input
                    name="departamento"
                    placeholder=" departamento"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.Departamento}
                />
                 <input
                    name="ciudad"
                    placeholder="ciudad"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.Ciudad}
                />
                 <input
                    name="direccion"
                    placeholder=" direccion"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.Direccion}
                />
                 <input
                    name="telefono"
                    placeholder="telefono"
                    type="text"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.Telefono}
                />
                


                <button className="btn btn-primary" type="submit" >
                    continuar
                </button>
            </form>
        </>
        
    );
};

export default Formulario;
