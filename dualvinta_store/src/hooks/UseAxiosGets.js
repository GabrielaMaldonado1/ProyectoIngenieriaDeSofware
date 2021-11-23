import axios from "axios"



export const BuscarCateoria = async ( categoria )  => {
    const url = `http://localhost:9000/api/producto/${encodeURI(categoria)}`;
    return await axios.get(url).then( (response) => {


        return response.data
    });
}

export const showAllItems = async ()  => {
    const url = `http://localhost:9000/api/producto`;
    return await axios.get(url).then( (response) => {
        return response.data
    });
}

export const GetUserId = async ( id )  => {
    const url = `http://localhost:9000/api/user/${ id }`;
    return await axios.get(url).then( (response) => {
        return response.data
    });
}