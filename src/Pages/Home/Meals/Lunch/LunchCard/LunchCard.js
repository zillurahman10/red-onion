import React from 'react';

const LunchCard = ({ lunch }) => {
    const { name, img, description, price } = lunch
    return (
        <div className='p-3 cursor-pointer' style={{ height: '400px' }}>
            <div className='b-card'>
                <img className='mx-auto' style={{ width: '200px' }} src={img} alt="" />
                <h5 className='text-center'>{name}</h5>
                <p className='text-center'><small>{description}</small></p>
                <h3 className='text-center'>${price}</h3>
            </div>
        </div>
    );
};

export default LunchCard;