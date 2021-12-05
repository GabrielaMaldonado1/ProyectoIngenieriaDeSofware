import axios from "axios"

export const subirFotoAPi = async (data, idUser) => {

    try {
        const res = await axios.put(`http://localhost:9000/api/users/${idUser}/subir-imagen`, data);
        return res;
    } catch (error) {
        return error;
    }
}
