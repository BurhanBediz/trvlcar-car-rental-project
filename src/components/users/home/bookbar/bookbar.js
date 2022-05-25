import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './bookbar.css'

const Bookbar = () => {
  return (
    <div className="bookbar">
        <h3>Explore our cars and book now</h3>
        <div>
        <Button as={Link} to="/vehicles" variant="secondary">Book Now</Button>
        </div>
    </div>
  )
}

export default Bookbar