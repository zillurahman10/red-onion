import React from 'react';
import './Banner.css'
import banner from '../../../Images/bannerbackground.png'


const Banner = () => {

    return (
        <header>
            <img src={banner} alt="" />
        </header>
    );
};

export default Banner;