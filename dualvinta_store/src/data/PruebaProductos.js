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
        fecha : new Date("1995-12-17T03:24:00"),
    }
]

 const dbProductos = [
    {
        id:"1",
        nombre: "Camisa Para Hombre",
        precio: 250,
        fecha: new Date("2020-12-17T03:24:00"),
        detalles: "Camisa de botones color verde, estilo militar, talla M",
        talla: 'M',
        marca:"AMERICAM RAG",
        modelo:"USA",
        serie:"N/A",
        categoria: "ROPA MASCULINA",
        cantidad: 12,
        imagen: img1,
        ventas_totales: 6,
    },
    {
        id:"2",
        nombre: "CAMISA POLO",
        precio: 300,
        fecha: new Date("2021-10-17T03:24:00"),
        detalles: "Camisa estilo polo, color gris, talla S",
        talla: 'S',
        marca:"DESERT",
        modelo:"USA",
        serie:"N/A",
        categoria: "ROPA MASCULINA",
        cantidad: 19,
        imagen: img2,
        ventas_totales: 5,
    },
    {
        id:"3",
        nombre: "Camiseta",
        precio: 150,
        fecha: new Date("2020-11-11T03:24:00"),
        detalles: "Camisa de algodon color ocre, talla M",
        talla: 'M',
        marca:"Holliester",
        modelo:"USA",
        serie:"N/A",
        categoria: "ROPA MASCULINA",
        cantidad: 10,
        imagen: img3,
        ventas_totales: 2,
    },
    {
        id:"4",
        nombre: "CREMAS CERAVE",
        precio: 340,
        fecha: new Date("2020-12-18T03:24:00"),
        detalles: "Cremas faciales CeraVe",
        talla: '',
        marca:"CeraVe",
        modelo:"USA",
        serie:"N/A",
        categoria: "CUIDADO PERSONAL",
        cantidad: 15,
        imagen: img4,
        ventas_totales: 1,
    },
    {
        id:"5",
        nombre: "Peeling Solution",
        precio: 350,
        fecha: new Date("2021-09-11T03:24:00"),
        detalles: "Suaviza el aspecto de la textura de la piel dando un aspecto más radiante",
        talla: '',
        marca:"The Ordinary",
        modelo:"USA",
        serie:"N/A",
        categoria: "CUIDADO PERSONAL",
        cantidad: 10,
        imagen: img5,
        ventas_totales: 9,
    },
    {
        id:"6",
        nombre: "VESTIDO",
        precio: 450,
        fecha: new Date("2021-10-01T03:24:00"),
        detalles: "Vestido con estampado color naranja, talla L",
        talla: 'L',
        marca:"Main Strip",
        modelo:"N/A",
        serie:"N/A",
        categoria: "ROPA FEMENINA",
        cantidad: 5,
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

export function findByCategory(categoria){
    const t = dbProductos.filter(v=>{
        return v.categoria === categoria
    });

    if(t.length > 0){
        return t;
    }else{
        return undefined;
    };
};

export function sortByDate(){
    const t = dbProductos.filter(v=>{return true});
    return t.sort((a,b) => {return b.fecha.getTime() - a.fecha.getTime()});
}

export function searchByName(array, busq){
    const r = array.filter(r =>{
        return r.nombre.toUpperCase().match(busq.toUpperCase());
    })
    return r;
}


export default dbProductos;