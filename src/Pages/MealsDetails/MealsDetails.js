import React from 'react';
import { useParams } from 'react-router-dom';

const MealsDetails = () => {
    const id = useParams()
    console.log(id);
    return (
        <div>
            <h1>this is meals details : {id.id}</h1>
        </div>
    );
};

export default MealsDetails;