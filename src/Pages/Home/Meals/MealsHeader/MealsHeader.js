import React from 'react';
import { Link } from 'react-router-dom';

const MealsHeader = () => {
    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <Link className='mx-3 text-decoration-none text-dark' to="breakfast">Breakfast</Link>
                <Link className='mx-3 text-decoration-none text-dark' to="lunch">Lunch</Link>
                <Link className='mx-3 text-decoration-none text-dark' to="dinner">Dinner</Link>
            </div>
        </div>
    );
};

export default MealsHeader;