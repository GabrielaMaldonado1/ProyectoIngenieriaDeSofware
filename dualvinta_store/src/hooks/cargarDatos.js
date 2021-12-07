import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCarroCompra } from "../actions/carroCompra";


export const CargarDatos = () => {
    const dispatch = useDispatch();

    const { data } = useSelector(state => state.producto)


    const [checking, setChecking] = useState(true);
    const [userCheck, setUserCheck] = useState(false);


    useEffect(() => {

         dispatch(showCarroCompra());

        setTimeout(() => {
            setChecking(false)
            setUserCheck(true)
        }, 1500);


    }, [dispatch, setChecking])
}
