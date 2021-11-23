import React from "react";

const año = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="py-3 page-footer rounded-lg shadow col-sm-12 fixed-bottom" style={{ backgroundColor: "white" }}>
            <div className="container">
                <p className="m-0 text-center">Copyright &copy; {año} - DualvintaStore</p>
            </div>
        </footer>
    )
};

export default Footer;