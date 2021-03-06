import pantalones from "./img/categorias/mujer/pantalones.jpg"
import abrigos from "./img/categorias/mujer/abrigos.jpg"
import blusas from "./img/categorias/mujer/blusas.jpg"
import camisetas from "./img/categorias/mujer/camisetas.jpg"
import vestidos from "./img/categorias/mujer/vestidos.jpg"



const dbCategoria = [
    {
        id:"1",
        nombreCat: "abrigo",
        img: abrigos,
    },
    {
        id:"2",
        nombreCat: "blusa",
        img: blusas,

    },
    {
        id:"3",
        nombreCat: "camiseta",
        img: camisetas,
    },
    {
        id:"4",
        nombreCat: "pantalon",
        img: pantalones,
    },
    {
        id:"5",
        nombreCat: "vestido",
        img: vestidos,
    }      
]

export function find(id){
    const t = dbCategoria.filter(v=>{
        return v.id === id
    });

    if(t.length > 0){
        return t[0];
    }else{
        return undefined;
    };
};

export function findByCategory(categoria){
    const t = dbCategoria.filter(v=>{
        return v.nombreCat === categoria
    });

    if(t.length > 0){
        return t;
    }else{
        return undefined;
    };
};

export default dbCategoria;