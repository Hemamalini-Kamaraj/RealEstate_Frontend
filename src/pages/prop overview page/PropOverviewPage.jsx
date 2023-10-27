import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import './PropsOverviewPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faTape, faIndianRupee, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'

function PropOverviewPage() {
 
    const [showContact, setShowContact] = useState(false);
    const navigate = useNavigate("");

    const location = useLocation();
    const data = location.state;
    const details = data.data;

    let jsonData = JSON.parse(sessionStorage.getItem("loggedInUser"));

    const handleContactOwner = async (e) => {
        e.preventDefault();

        if (jsonData) {
            setShowContact(true)
        } else {
            alert("Kindly Signin to View the owner details!")
            navigate("/signin")
        }

    }

  return (
    <>
        <Header />
        <div className='propsOverview'>
            <h2>{details.name}</h2>
            <div className='split'>
                <div className='right'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JhtzymIra_KiY8RnZEPtKBcZ-SwLDS8LqYCAg0ykfQ&s' alt='PropertyImage'></img>
                </div>
                <div className='badgeList left'>
                      <h4>{details.name}<span><FontAwesomeIcon icon={faIndianRupee} />&nbsp;{data.data.price}</span></h4>
                      <div className='overViewBadge'>
                          <div className='address'>{details.address}</div>
                          <div className='propType'>{details.type}</div>
                          <div className='loc'>{details.country}</div>
                      </div><br/>
                      <div className='ament_list'>
                            <div>
                                <FontAwesomeIcon icon={faBed} />&nbsp;{details.bedrooms}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faBath} />&nbsp;{details.bathrooms}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faTape} />&nbsp;{details.surface}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faHouse} />&nbsp;constructed on {details.year}
                            </div>
                      </div>
                      <div className='desc'>
                          {details.description}
                      </div>
                      <div className='conOwn'>
                        <button onClick={handleContactOwner}>Contact Owner</button>
                     </div>
                </div>
            </div>
            <div className='conCard'>
                 {
                            showContact==true ?
                            <div className='contact'>
                                <h3>{details.agent.name}</h3>
                                <h5><FontAwesomeIcon icon={faPhone} />&nbsp;{details.agent.phone}</h5>
                            </div>
                            :
                            ""
                        }
            </div>
            
            {/* <div className='split left'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JhtzymIra_KiY8RnZEPtKBcZ-SwLDS8LqYCAg0ykfQ&s' alt='PropertyImage'></img>
                <div className='badgeList'>
                      <h4>{details.name}<span><FontAwesomeIcon icon={faIndianRupee} />&nbsp;{data.data.price}</span></h4>
                      <div className='overViewBadge'>
                          <div className='address'>{details.address}</div>
                          <div className='propType'>{details.type}</div>
                          <div className='loc'>{details.country}</div>
                      </div><br/>
                      <div className='ament_list'>
                            <div>
                                <FontAwesomeIcon icon={faBed} />&nbsp;{details.bedrooms}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faBath} />&nbsp;{details.bathrooms}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faTape} />&nbsp;{details.surface}
                            </div>
                      </div>
                      <div className='desc'>
                          {details.description}
                      </div>
                </div>
            </div> */}
            {/* <div className='split right'> */}
                {/* <div className='grid-container'>
                    <div>
                        <FontAwesomeIcon icon={faBed} />&nbsp;{details.bedrooms}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBath} />&nbsp;{details.bathrooms}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTape} />&nbsp;{details.surface}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHouse} />&nbsp;{details.year}
                    </div>        
                </div> */}
                
            {/* </div> */}
        </div>
        <Footer />
    </>
  )
}

export default PropOverviewPage