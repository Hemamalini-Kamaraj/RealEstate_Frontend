import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faTape, faIndianRupee } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


function Card(data) {
    const navigate = useNavigate();

  return (
    <div className='cardList'>
          <div className='card' onClick={() => navigate( "/overView", {state: data})}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JhtzymIra_KiY8RnZEPtKBcZ-SwLDS8LqYCAg0ykfQ&s' alt='PropertyImage'></img>
              <div className='badgeList'>
                  <div className='propType'>{data.data.id}house</div>
                  <div className='loc'>TamilNadu</div>
              </div>
              <h5>{data.data.address}</h5>
              <div className='ament_list'>
                  <div>
                      <FontAwesomeIcon icon={faBed} />&nbsp;{data.data.bedrooms}
                  </div>
                  <div>
                      <FontAwesomeIcon icon={faBath} />&nbsp;{data.data.bathrooms}
                  </div>
                  <div>
                      <FontAwesomeIcon icon={faTape} />&nbsp;{data.data.surface}
                  </div>
              </div>
              <h5><FontAwesomeIcon icon={faIndianRupee} />&nbsp;{data.data.price}</h5>
          </div>
        
    </div>
  )
}

export default Card