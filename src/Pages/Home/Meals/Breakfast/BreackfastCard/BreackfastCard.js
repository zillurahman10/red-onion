import React from 'react';
import './BreackfastCard.css'
import { useNavigate } from 'react-router-dom'

const BreackfastCard = ({ breakfast }) => {
    const { name, img, price, description, id } = breakfast

    const navigate = useNavigate()

    const showDetails = () => {
        const path = `/breakfast/${id}`
        navigate(path)
    }

    return (
        <div className='container' onClick={showDetails}>
            <div className='b-card'>
                <img className='mx-auto' style={{ width: '200px' }} src={img} alt="" />
                <h4 className='text-center'>{name}</h4>
                <p className='text-center'>{description}</p>
                <h3 className='text-center'>${price}</h3>
            </div>
        </div>
    )
}

export default BreackfastCard;