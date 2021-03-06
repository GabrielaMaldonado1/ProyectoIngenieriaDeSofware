import React, { useState } from 'react'
import Logo from '../../data/img/DUALVINTA.png'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export const HeaderLogo = () => {

    const history = useHistory();

    const [formState, setFormState] = useState({
        search: ''
    });


    const { search } = formState;

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        });

    };

    const buscar = () =>{ 

        history.push(`/resultadoBuscar/${search}`)
    }
    
    return (

        <>
            <div className="row-Logo">

                <ul className="logo-car">
                    <li className="logo-empresa"> <Link to="/"><img src={Logo} alt="Logo" /></Link></li>
                    <li className="car-shop">
                        <ul className="car-contador">
                            <li className="car-logo-contador"><a><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8fd8c6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="6" cy="19" r="2" />
                                <circle cx="17" cy="19" r="2" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l14 1l-1 7h-13" />
                            </svg></a></li>
                            <li className="car-total-contador"> 100,000 LPS </li>
                            <li className="car-items-contador"> 100 </li>
                        </ul>
                    </li>
                    <li className="buscador">
                        <form onSubmit={buscar}>
                            <input type="search" className="input_buscar" name="search" onChange={handleInputChange} placeholder="Buscalo aqui"></input>
                            <input type="submit" className="input_btn_buscar" value="Buscar"></input>
                        </form>
                    </li>
                </ul>
            </div>
        </>

    )
}