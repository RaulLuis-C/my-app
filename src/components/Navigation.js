import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <header>
            <h1>Bienvenido</h1>
            <ul>
                <li>
                    <Link to="/redes">Redes</Link>
                </li>
                <li>
                    <Link to="/comunication">Comunicacion</Link>
                </li>
                <li>
                    <Link to="/muestras">Muestras</Link>
                </li>
            </ul>
        </header>
    )
}

export default Navigation;