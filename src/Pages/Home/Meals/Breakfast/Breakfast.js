import React from 'react';
import './Breakfast.css'
import breakfast1 from '../../../../Images/breakfast/breakfast1.png'
import breakfast2 from '../../../../Images/breakfast/breakfast2.png'
import breakfast3 from '../../../../Images/breakfast/breakfast3.png'
import breakfast4 from '../../../../Images/breakfast/breakfast4.png'
import breakfast5 from '../../../../Images/breakfast/breakfast5.png'
import breakfast6 from '../../../../Images/breakfast/breakfast6.png'
import BreackfastCard from './BreackfastCard/BreackfastCard';
import MealsHeader from '../MealsHeader/MealsHeader';

const Breakfast = () => {

    const breakfasts = [
        { id: 1, name: 'Bagel and cream cheese', description: 'How we dream about our feature', price: 6.99, img: 'https://ibb.co/CsZ1x3q' },
        { id: 2, name: 'Breakfast sandwich', description: 'How we dream about our feature', price: 9.99, img: 'https://ibb.co/vLJg1C1' },
        { id: 3, name: 'Baked Chicken', description: 'How we dream about our feature', price: 10.99, img: breakfast3 },
        { id: 4, name: 'Eggs Benedict', description: 'How we dream about our feature', price: 8.99, img: breakfast4 },
        { id: 5, name: 'Toast Croissant Fried egg', description: 'How we dream about our feature', price: 19.99, img: breakfast5 },
        { id: 6, name: 'Full Breakfast Fried Egg Toast Brunch', description: 'How we dream about our feature', price: 3.99, img: breakfast6 }
    ]

    return (
        <div>
            <MealsHeader></MealsHeader>
            <div className='meals mt-5 container'>
                {
                    breakfasts.map(breakfast => <BreackfastCard key={breakfast.id} breakfast={breakfast}></BreackfastCard>)
                }
            </div>
        </div>
    );
};

export default Breakfast;