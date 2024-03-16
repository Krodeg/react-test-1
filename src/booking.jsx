import React from 'react'
import { useNavigate } from 'react-router-dom'

function Booking() {
    const navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    }

    return (
        <div>
            Booking

            <button onClick={handleClick}>back</button>
        </div>
    )
}


export default Booking
