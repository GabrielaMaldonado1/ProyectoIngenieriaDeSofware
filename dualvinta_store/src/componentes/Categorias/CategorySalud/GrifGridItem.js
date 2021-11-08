import carrito from '../../../data/icons/carrito.png';

export const GrifGridItem = ({id, nombre, precio, imagen}) => {
    console.log(id, nombre, precio)
    return (
        <div className="card">
            <img src={imagen} alt={nombre} />
            <h1>{nombre}</h1>
            <p>{precio} lps</p>
            <div className="py-4">
                    <button className="btn btn-outline-success" >
                        <img src={carrito} alt="iconCarrito" />Agregar al Carrito
                    </button>
            </div>
        </div>
    )
}
