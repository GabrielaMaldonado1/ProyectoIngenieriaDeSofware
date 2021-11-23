import React from "react";
import "../css/vendor/bootstrap/css/bootstrap.min.css";
import Footer from "../componentes/Footer";
import { Header } from "../componentes/Header/header";
import fb from "../data/rs/fb.png";
import ig from "../data/rs/ig.png";
import tt from "../data/rs/tt.png";
import { Link } from "react-router-dom";

const Nosotros = () => {
    return (
        <div>
            <Header seccion="nosotros" titulo="NOSOTROS" />
            <div className="container">
                <div className="row py-4">
                    <div className="col-md-3 text-right py-4">
                        <h2><b>MISION</b></h2>
                    </div>
                    <div className="col-md-9 py-4 px-2">
                        <h5>
                            Ofrecer a nuestros clientes ropa en buen estado, a precios accesibles El objetivo es ofrecer productos de calidad con estilo, a precios atractivos para todos los usuarios del mundo.
                        </h5>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-md-3 text-right py-4">
                        <h2><b>VISION</b></h2>
                    </div>
                    <div className="col-md-9 py-4 px-2">
                        <h5>
                            Posicionarnos en el mercado como una tienda exitosa y socialmente responsable con reconocimiento a nivel nacional gracias a nuestros productos, calidad, precios y servicio, siempre respetando los derechos y el trabajo tanto de nuestros colaboradores como de nuestros clientes, para asi seguir creciendo y poder ofrecer nuestros productos en todo el interior del país.
                        </h5>
                    </div>
                </div>
                <div className="row  text-center" style={{ marginBottom: 100 }}>
                    <div className="col-sm-6">
                        <h3>Contactanos</h3>
                        <hr />
                        <h6>info@dualvintastore.com</h6>
                        <h6>+504 9611-2949</h6>
                    </div>
                    <div className="col-sm-6">
                        <h3>Siguenos</h3>
                        <hr />
                        <a href="https://www.facebook.com/dualvinta" >
                            <img src={fb} alt="fb" width="30px" height="30px" style={{ marginRight: 15 }} />
                        </a>
                        <a href="https://instagram.com/dualvinta?r=nametag" >
                            <img src={ig} alt="ig" width="30px" height="30px" style={{ marginRight: 15 }} />
                        </a>
                        <a href="https://vm.tiktok.com/ZM8pjXWJN/" >
                            <img src={tt} alt="tt" width="30px" height="30px" style={{ marginRight: 15 }} />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Nosotros;