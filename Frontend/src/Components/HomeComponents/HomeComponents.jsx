import React from 'react'
import logo from '../img/logoSUIZA.png'
import Navegador from '../Navegador/Navegador'

const HomeComponents = () =>{
    return (
        <div style={{ display: 'flex' }}>
            <Navegador />
            <div>
                <h1>Home Component</h1>
                <p>DESARROLLO DE SISTEMAS DE INFORMACIÓN - I.E.S.T.P."SUIZA"-PUCALLPA...</p>
                <div className='logos'>
                    <img src={logo} style={{ width: "250px" }} alt="Logo SUIZA" />
                </div>
            </div>
        </div>
    )
}

export default HomeComponents