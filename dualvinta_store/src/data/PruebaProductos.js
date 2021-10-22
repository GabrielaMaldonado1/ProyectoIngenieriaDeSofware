import img1 from "./img/Productos/1.jpeg";
import img2 from "./img/Productos/2.jpeg";
import img3 from "./img/Productos/3.jpeg";
import img4 from "./img/Productos/4.jpeg";
import img5 from "./img/Productos/5.jpeg";
import img6 from "./img/Productos/6.jpeg";

const dbCompras = [
    {
        id_compra:"",
        id_producto: "",
        cantidad_vendida: "",
        fecha : new Date(),
    }
]

 const dbProductos = [
    {
        id:"1",
        nombre: "Camisa Para Hombre",
        precio: 150,
        fecha: new Date().toDateString(),
        detalles: "Camisa de botones color verde, estilo militar",
        marca:"La que no sea Patito, solo Caro!",
        modelo:"USA",
        serie:"N/A",
        categoria: "ROPA MASCULINA",
        cantidad: 12,
        imagen: img1,
        ventas_totales: 6,
    },
    {
        id:"2",
        nombre: "Producto 2",
        precio: 1500,
        fecha: new Date().toDateString(),
        detalles: "Esta es la descripcion de muestra de los productos seleecionados!",
        marca:"Patito",
        modelo:"Chino",
        serie:"si es serio",
        categoria: "ROPA MASCULINA",
        cantidad: 189,
        imagen: img2,
        ventas_totales: 5,
    },
    {
        id:"3",
        nombre: "Producto 3",
        precio: 250,
        fecha: new Date().toDateString(),
        detalles: "Esta es la descripcion de muestra de los productos seleecionados!",
        marca:"Patito",
        modelo:"Chino",
        serie:"si es serio",
        categoria: "ROPA MASCULINA",
        cantidad: 180,
        imagen: img3,
        ventas_totales: 2,
    },
    {
        id:"4",
        nombre: "Producto 4",
        precio: 189,
        fecha: new Date().toDateString(),
        detalles: "Esta es la descripcion de muestra de los productos seleecionados!",
        marca:"Patito",
        modelo:"Chino",
        serie:"si es serio",
        categoria: "CUIDADO PERSONAL",
        cantidad: 105,
        imagen: img4,
        ventas_totales: 1,
    },
    {
        id:"5",
        nombre: "Producto 5",
        precio: 12000,
        fecha: new Date().toDateString(),
        detalles: "Esta es la descripcion de muestra de los productos seleecionados!",
        marca:"Patito",
        modelo:"Chino",
        serie:"si es serio",
        categoria: "CUIDADO PERSONAL",
        cantidad: 10,
        imagen: img5,
        ventas_totales: 9,
    },
    {
        id:"6",
        nombre: "Producto 6",
        precio: 1200,
        fecha: new Date().toDateString(),
        detalles: "Esta es la descripcion de muestra de los productos seleecionados este es un nuevo producto!",
        marca:"Hollister",
        modelo:"N/A",
        serie:"N/A",
        categoria: "ROPA FEMENINA",
        cantidad: 100,
        imagen: img6,
        ventas_totales: 7,
    },
];

export function find(id){
    const t = dbProductos.filter(v=>{
        return v.id === id
    });

    if(t.length > 0){
        return t[0];
    }else{
        return undefined;
    };
};

export default dbProductos;