import React, { useEffect, useState } from 'react';
import './Breakfast.css'
import BreackfastCard from './BreackfastCard/BreackfastCard';
import MealsHeader from '../MealsHeader/MealsHeader';
// import breakfast1 from '../../../../Images/breakfast/breakfast1.png'
// import breakfast2 from '../../../../Images/breakfast/breakfast2.png'
// import breakfast3 from '../../../../Images/breakfast/breakfast3.png'
// import breakfast4 from '../../../../Images/breakfast/breakfast4.png'
// import breakfast5 from '../../../../Images/breakfast/breakfast5.png'
// import breakfast6 from '../../../../Images/breakfast/breakfast6.png'

const Breakfast = () => {

    const [breakfasts, setBreakfasts] = useState([])

    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfasts(data))
    }, [])

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