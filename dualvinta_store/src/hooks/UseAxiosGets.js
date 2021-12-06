import { async } from "@firebase/util";
import axios from "axios"



export const BuscarCateoria = async (categoria) => {
    const url = `https://dualvinta.herokuapp.com/api/producto/${encodeURI(categoria)}`;
    return await axios.get(url).then((response) => {


        return response.data
    });
}

export const showAllItems = async () => {
    const url = `https://dualvinta.herokuapp.com/api/producto`;
    return await axios.get(url).then((response) => {
        return response.data
    });
}

export const GetUserId = async (uid) => {
    const url = `https://dualvinta.herokuapp.com/api/users/${uid}`;
    return await axios.get(url).then((response) => {
        return response.data
    });
}

export const updateUserByUid = async (uid, data) => {

    try {
        const url = `https://dualvinta.herokuapp.com/api/users/${uid}`;
        axios.put(url, data);
    } catch (error) {
        console.log(error)
    }

}

export const getCarroCompras = async () =>{

    const url = `https://dualvinta.herokuapp.com/api/carroItems`

    return await axios.get(url).then( (response) =>{
        return response.data;
    })

}