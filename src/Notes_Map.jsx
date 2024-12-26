import { Icon } from 'leaflet'
import React from 'react'


const Notes_Map = ({blackImg, redImg1, redImg2}) => {
  return (
    <div className='info-icons'>
        <div className='info-each-icon'>
            <img src={blackImg} alt="Map Icon" style={{ width: '30px', height: '30px' }} />
            <p>Condo</p>
        </div>
        <div className="info-each-icon">
            <img src={redImg2} alt="Map Icon1" style={{ width: '30px', height: '30px' }} />
            <p>Duplex</p>
        </div>
        <div className="info-each-icon">
            <img src={redImg1} alt="Map Icon2" style={{ width: '30px', height: '30px' }} />
            <p>Triplex</p>
        </div>
    </div>
  )
}

export default Notes_Map