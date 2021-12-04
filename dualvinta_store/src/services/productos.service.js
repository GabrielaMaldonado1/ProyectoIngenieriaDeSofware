import axios from "axios";

const query = "http://localhost:9000/api";

export function getProductoByFilter(id) {
    return axios.get(`${query}/buscador/${id}`)
        .then(result => result)
        .catch(error => console.log(error))
};

export function getProductoCuidadoByFilter(id) {
    return axios.get(`${query}/productos_lesly/${id}`)
        .then(result => result)
        .catch(error => console.log(error))
};

export const gp = (id) => {
    return new Promise((resolve)=>{
        axios.get(`${query}/productos_lesly/${id}`)
        .then(result => resolve(result))
        .catch(error => console.log(error))
    });
}