import React from 'react';
import './Header.css'
import logo from '../../Images/logo2.png'
import cart from '../../Images/icons/Path 1.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-between container sticky-top bg-white my-3'>
            <Link to="/">
                <img className='logo' src={logo} alt="" />
            </Link>
            <div className='d-flex'>
                <Link className='d-flex align-items-center' to="/cart">
                    <img src={cart} style={{ width: '27px', marginRight: '5px' }} alt="" />
                </Link>
                <Link className='text-decoration-none mx-3 d-flex align-items-center' to='/login'>Login</Link>
                <Link style={{ backgroundColor: 'crimson', borderRadius: '20px' }} className='text-decoration-none px-3 py-2 text-light' to='/signup'>Sign up</Link>
            </div>
        </div>
    );
};

export default Header;