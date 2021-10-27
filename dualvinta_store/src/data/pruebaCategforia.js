import img1 from "./img/Productos/1.jpeg";
import img2 from "./img/Productos/2.jpeg";
import img3 from "./img/Productos/3.jpeg";
import img4 from "./img/Productos/4.jpeg";
import img5 from "./img/Productos/5.jpeg";
import img6 from "./img/Productos/6.jpeg";



const dbCategoria = [
    {
        id_cat:"1",
        nombreCat: "Vestimenta",
        img: img2,
    },
    {
        id:"2",
        nombreCat: "crema",
        img: img3,

    },
    {
        id:"3",
        nombreCat: "vestimenta",
        img: img4,
    }     
]

export function find(id){
    const t = dbCategoria.filter(v=>{
        return v.id_cat === id
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