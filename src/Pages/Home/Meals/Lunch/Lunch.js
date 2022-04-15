import React from 'react';
import MealHeader from '../MealsHeader/MealsHeader'
import lunch1 from '../../../../Images/lunch/lunch1.png'
import lunch2 from '../../../../Images/lunch/lunch1.png'
import lunch3 from '../../../../Images/lunch/lunch2.png'
import lunch4 from '../../../../Images/lunch/lunch3.png'
import lunch5 from '../../../../Images/lunch/lunch4.png'
import lunch6 from '../../../../Images/lunch/lunch6.png'
import LunchCard from './LunchCard/LunchCard';

const Lunch = () => {

    const lunches = [
        {
            id: 1,
            name: 'Healthy Meal Plan',
            description: 'How we dream about our feature',
            price: 23.99,
            img: lunch1
        },
        {
            id: 2,
            name: 'Fried Chicken Bento',
            description: 'How we dream about our feature',
            price: 9.99,
            img: lunch2
        },
        {
            id: 3,
            name: 'Tarragoan-Rubbed-Salmon',
            description: 'How we dream about our feature',
            price: 6.99,
            img: lunch3
        },
        {
            id: 4,
            name: 'Indian Lunch',
            description: 'How we dream about our feature',
            price: 8.99,
            img: lunch4
        },
        {
            id: 5,
            name: 'Beef Steak',
            description: 'How we dream about our feature',
            price: 15.99,
            img: lunch5
        },
        {
            id: 6,
            name: 'Honey-Soy-Glazed Salmon with Peppers',
            description: 'How we dream about our feature',
            price: 7.99,
            img: lunch6
        },
    ]

    return (
        <div>
            <MealHeader></MealHeader>
            <div className='meals container mt-5'>
                {
                    lunches.map(lunch => <LunchCard key={lunch.id} lunch={lunch}></LunchCard>)
                }
            </div>
        </div>
    );
};

export default Lunch;