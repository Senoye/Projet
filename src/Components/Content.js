import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Content = () => {
  return (
        <div className='card container'>
        <img className='img-card' src='https://img.freepik.com/photos-gratuite/fleurs-cerisier-au-printemps-pagode-chureito-montagne-fuji-au-japon_335224-213.jpg?w=826&t=st=1686170196~exp=1686170796~hmac=f78b131dc4f11facc2cafd341af83f69c765439dabd3357581cdb32ceba4e2ba' />
        <div className='location-card'>
            <FontAwesomeIcon icon={faLocationDot} style={{color: "#F55A5A",}} />
            <h3 className='title-location'>JAPAN</h3>
            <a href='#' className='link-map'>View on Google Maps</a>
        </div>
            <h1 className='title'>Mount Fuji</h1>
            <h3 className='date'>12 Jan, 2021 - 24 Jan, 2021</h3>
            <p className='description'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
  )
}

export default Content
