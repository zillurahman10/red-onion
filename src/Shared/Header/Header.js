import React from 'react';
import './Header.css'
import logo from '../../Images/logo2.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-between container sticky-top bg-white'>
            <Link to="/">
                <img className='logo' src={logo} alt="" />
            </Link>
            <div>
                <button>Cart</button>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign up</Link>
            </div>
        </div>
    );
};

export default Header;