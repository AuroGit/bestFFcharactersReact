import React from "react";
import NavSelector from '../componentes/NavSelector';
import logo from '../assets/logos/ff-logo.png';
import '../stylesheets/Header.css';

function Header() {
    return (
        <header>
            <img 
				className='logo' 
				src={ logo } 
				alt='Best of FF - logo'
				onClick={ () => window.location.href = '/' } />
            
            <NavSelector />
        </header>
    );
}

export default Header;