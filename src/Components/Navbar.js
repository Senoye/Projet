import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-head'>
            <h3 className='nav-title'>my travel journal.</h3>
            <FontAwesomeIcon className='nav-icon' icon={faEarthAmericas} style={{color: "#ffffff",}} />
        </div>
    </div>
  )
}

export default Navbar
