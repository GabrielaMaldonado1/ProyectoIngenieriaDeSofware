import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';

import img1 from "../data/img/inicio/calzado_descuento.png";
import img2 from "../data/img/inicio/Feliz_Navidad.png";
import img3 from "../data/img/inicio/OFERTAS_PARA_SEMANA_SANTA.png";

export const OfertasHome = () => {

    const [pos, setPos] = useState(1);

    const handleAction = (actual) => {

        if (pos === actual) {
            return "carousel-item active"
        } else {
            return "carousel-item"
        }

    }

    const handleNext = () => {

        if (pos === 3) {
            setPos(1);
        } else {
            setPos(pos + 1);
        }
    }

    const handlePrev = () => {

        if (pos === 1) {
            setPos(3);
        } else {
            setPos(pos - 1);
        }
    }

    return (
        <div id="carouselExampleIndicators" class="carousel slide carrusel_home" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class={handleAction(1)} id="primero">
                    <img src={img2} className="img_carrusel_home" alt="..."></img>
                </div>
                <div class={handleAction(2)} id="segundo">
                    <img src={img1} class="img_carrusel_home" alt="..."></img>
                </div>
                <div class={handleAction(3)} id="tercero">
                    <img src={img3} class="img_carrusel_home" alt="..."></img>
                </div>
                <a className="btn_carrusel_home_prev" type="button" onClick={handlePrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                </a>
                <a className="btn_carrusel_home_next" type="button" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </a>
            </div>

        </div>
    )
};


const CarouselLesly = () => {
    return (
        <div className="container-fluid d-flex justify-content-center py-2 pad">
        <Carousel style={{width:"100%", height:"550px"}}>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    height="550px"
                    src={img1}
                    alt="First slide"
                    
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    height="550px"
                    src={img2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item  interval={5000}>
                <img
                    className="d-block w-100"
                    height="550px"
                    src={img3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default CarouselLesly;