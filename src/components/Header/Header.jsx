import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header">
            <Link to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default Header