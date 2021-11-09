import axios from 'axios';

export const BuscarCateoriaLimit = async ( categoria ) => {

        console.log(categoria);
        const url = `http://localhost:9000/api/producto/${categoria}`;

        console.log(url);

        const resp = await axios.get(url)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.log(error);
            });

        console.log(resp)

        return resp;
    }

export const GetAll = async () => {
    const resp = await axios.get(`http://localhost:9000/api/producto`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });

    return resp;
}