import React from 'react'
import { useState, useEffect } from 'react';
import { findByCategory } from '../../../data/PruebaProductos';
import ViewProducto from '../../Productos/ViewProducto';

const GifGrid = ({ title, category }) => {

    const [elements, setElements] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(() => {
        if (update) {
            setUpdate(false);
            const t = findByCategory(category);
            setElements(t);
        };
    }, [update]);

    return (
        <div className="container-fluid rounded">
            <h4 className="py-2">{title}</h4>
            <hr />
            <div className="row">
                {elements.map((val, index)=>
                    <ViewProducto key={index} element={val} />
                )}
            </div>
        </div>
    )
};

export default GifGrid;