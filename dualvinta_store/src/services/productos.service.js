import axios from "axios";

const query = "http://localhost:9000/api";

export function getProductoByFilter(id) {
    return axios.get(`${query}/buscador/${id}`)
        .then(result => result)
        .catch(error => console.log(error))
};