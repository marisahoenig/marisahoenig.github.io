import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header">
            <div className="Logo">
                <Link to='/'>Marisa Hoenig</Link>
            </div>
            <div className="Nav">
                <Link to='/about'>about</Link>
                <Link to='/blog'>blog</Link>
                <Link to='/travels'>travels</Link>
                <Link to='/contact'>contact</Link>
            </div>
        </div>
    )
}

export default Header