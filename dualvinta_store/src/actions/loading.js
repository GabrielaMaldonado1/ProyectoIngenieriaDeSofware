import { types } from "../types/types";

export const cargadoAction = (cargado = true) => ({
    type: types.cargado,
    payload: {
        cargado
    }
})

export const noCargado = () => ({
    type:types.nocargado
})
