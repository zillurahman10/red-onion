import React from 'react';
import dinner1 from '../../../../Images/dinner/dinner1.png'
import dinner2 from '../../../../Images/dinner/dinner2.png'
import dinner3 from '../../../../Images/dinner/dinner3.png'
import dinner4 from '../../../../Images/dinner/dinner4.png'
import dinner5 from '../../../../Images/dinner/dinner5.png'
import dinner6 from '../../../../Images/dinner/dinner6.png'
import MealsHeader from '../MealsHeader/MealsHeader';
import DinnerCard from './DinnerCard/DinnerCard';
const Dinner = () => {

    const dinners = [
        {
            id: 1,
            name: 'Salmon with Grapefruit and Lentil Salad',
            description: 'How we dream about our feature',
            price: 9.99,
            img: dinner1
        },
        {
            id: 2,
            name: 'Lemony Salmon Piccata',
            description: 'How we dream about our feature',
            price: 10.99,
            img: dinner2
        },
        {
            id: 3,
            name: 'Pork Tendered With Quinoa Pilaf',
            description: 'How we dream about our feature',
            price: 12.99,
            img: dinner3
        },
        {
            id: 4,
            name: 'French Fries with Cheese',
            description: 'How we dream about our feature',
            price: 8.99,
            img: dinner4
        },
        {
            id: 5,
            name: 'Garlic Butter Baked Salmon',
            description: 'How we dream about our feature',
            price: 6.99,
            img: dinner5
        },
        {
            id: 6,
            name: 'Baked Chicken',
            description: 'How we dream about our feature',
            price: 9.99,
            img: dinner6
        },
    ]

    return (
        <div>
            <MealsHeader></MealsHeader>
            <div className='meals mt-5 container'>
                {
                    dinners.map(dinner => <DinnerCard key={dinner.id} dinner={dinner}></DinnerCard>)
                }
            </div>
        </div>
    );
};

export default Dinner;