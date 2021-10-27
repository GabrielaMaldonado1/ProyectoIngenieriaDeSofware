
import React from 'react'
import img_opc from '../../data/img/Productos/2.jpeg'
import dbCategoria from '../../data/pruebaCategforia'
import pruebaCategorias from '../../data/pruebaCategforia'
import arreglo from '../../data/pruebaCategforia'
import img_opc1 from '../../data/img/Productos/1.jpeg'
import img_opc2 from '../../data/img/Productos/2.jpeg'
import img_opc3 from '../../data/img/Productos/3.jpeg'
import img_opc4 from '../../data/img/Productos/4.jpeg'
import img_opc5 from '../../data/img/Productos/5.jpeg'
export const OpcIndividual = ( { img, nombreCat } ) => {
    const dbCategoria = [
        {
            id_cat:"1",
            nombreCat: "Vestimenta",
            img: img_opc1,
        },
        {
            id_cat:"2",
            nombreCat: "Vestimenta",
            img: img_opc2,
        },
        {
            id_cat:"3",
            nombreCat: "Vestimenta",
            img: img_opc3,
        },
        {
            id_cat:"4",
            nombreCat: "Cuidado personal",
            img: img_opc4,
        },
        {
            id_cat:"5",
            nombreCat: "Cuidado personal",
            img: img_opc5,
        },
        
    ]
    
    return (
       
        <div className="OpcCategorias" style={{}}>

  <div className="OpcIndividual__img">
            <img className="img_categorias" src={dbCategoria[ 0].img} ></img>
            </div>
             <h5>{dbCategoria[ 0].nombreCat}</h5>
             <div className="OpcIndividual__img">
            <img className="img_categorias" src={dbCategoria[ 1].img} ></img>
            </div>
             <h5>{dbCategoria[ 1].nombreCat}</h5>
             <div className="OpcIndividual__img">
            <img className="img_categorias" src={dbCategoria[ 2].img} ></img>
            </div>
             <h5>{dbCategoria[ 2].nombreCat}</h5>
             <div className="OpcIndividual__img">
            <img className="img_categorias" src={dbCategoria[ 3].img} ></img>
            </div>
             <h5>{dbCategoria[ 3].nombreCat}</h5>
             <div className="OpcIndividual__img">
            <img className="img_categorias" src={dbCategoria[ 4].img} ></img>
            </div>
             <h5>{dbCategoria[ 4].nombreCat}</h5>
            
    </div>
    )
}

