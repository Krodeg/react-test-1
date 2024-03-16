import React from 'react'
import { Link } from 'react-router-dom'

function Homecomponent() {
  return (
    <div>
      Homecomponent <br />

      <Link to="/booking">
        <button style={{padding: "10px", background: "green"}}>Book Now</button>
      </Link>
    </div>
  )
}

export default Homecomponent
