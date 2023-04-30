import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

function NavBar() {
    return (
        <nav className='containerNavBar'>
            <div className='itemNavBar'>
                <Link to="/">
                    <h1>Jugar</h1>
                </Link>
            </div>
            <div className='itemNavBar'>
                <Link to="/createCard">
                    <h2>Crear Carta</h2>
                </Link>
            </div>
            <div className='itemNavBar'>
                <Link to="/createPlanet">
                    <h2>Crear Planeta</h2>
                </Link>
            </div>
            <div className='itemNavBar'>
                <Link to="/createDeck">
                    <h2>Crear Baraja</h2>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar