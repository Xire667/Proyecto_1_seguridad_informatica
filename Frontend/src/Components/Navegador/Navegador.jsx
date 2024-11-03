import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navegador.css';
import logo from '../img/logoSUIZA.png';
import { IoHome } from "react-icons/io5"; //el list no me funciona

const Navegador = () => {
    const location = useLocation();
    return (
        <div className="navbar">
            <a href="/" className={location.pathname === '/' ? 'active' : ''}><IoHome style={{ fontSize: '24px', color: 'white', marginRight: '8px' }} />Inicio</a>
            <a href="/studentform" className={location.pathname === '/studentform' ? 'active' : ''}>Student Form</a>
            <a href="/studentlist" className={location.pathname === '/studentlist' ? 'active' : ''}>Student List</a>
            <div className='logos'>
                {/* <img src={logo} alt="Logo SUIZA" />  */}
            </div>
        </div>
    );
};

export default Navegador;
