import React from "react";
import { Link } from "react-router-dom";
import NavSelector from '../componentes/NavSelector';
import logo from '../assets/logos/ff-logo.png';
import '../stylesheets/Header.css';

function Header() {
    return (
        <header>
            <Link to='/'>
                <img 
                    className='logo' 
                    src={ logo } 
                    alt='Best of FF - logo' 
                />
            </Link>
            
            <NavSelector />
        </header>
    );
}

export default Header;