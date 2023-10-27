import React, { useEffect, useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { PersonCircle } from 'react-bootstrap-icons'
import { ToastContainer, toast, Zoom } from 'react-toastify';

function Header() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [showProfileDet, setShowProfileDet] = useState(false);
    const navigate = useNavigate();

    let jsonData = JSON.parse(sessionStorage.getItem("loggedInUser"));

    useEffect(() => {
        if (jsonData) {
            setShowProfileDet(true)
        }
    })

    const handlePostProperty = (e) => {
        e.preventDefault();

        if (jsonData) {
            navigate("/post-property")
        } else {
            toast.info("Kindly Signin to post your property!")
            setTimeout(() => {
                navigate("/signin");
            }, 1000);
        }
    }

    const handleLogout = (e) => {
        e.preventDefault();
        window.sessionStorage.clear();
        toast.info("Successfully Logged out")
        setTimeout(() => {
                location.replace("https://benevolent-froyo-2aa393.netlify.app/");
            }, 1000);
    };

  return (
    <div className='header'>
          <div className="logo" onClick={() => navigate("/")} style={{ fontSize: "33px", fontWeight:"bolder"}}>
            RealEstate
          </div>
          <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}} >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
            >
            <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
            />
            </svg>
          </button>
          <div className={isNavExpanded ? "nav-list expanded" : "nav-list"}>
            <ul>
                <div className='nav-link' onClick={() => navigate("/")}>
                    Home
                </div>
                <div className='nav-link' onClick={() => navigate("/featured")}>
                    Featured
                </div>
                <div className='nav-link' onClick={() => navigate("/properties")}>
                    Properties
                </div>
                {/* <div className='nav-link' onClick={handlePostProperty}>
                    Post Property
                </div> */}
            </ul>
        </div>
        <div className='dropdown'>
                <div className='dropBtn nav-list'>
                    <PersonCircle className='profileIcon'/>
                </div>
                {
                    showProfileDet==true ?
                    <div className='dropdown-content'>
                        <a href='/profile'>Profile</a>
                        <a onClick={handleLogout}>Log out</a>
                    </div>
                    :
                    <div className='dropdown-content'>
                        <a href='/signin'>Signin</a>
                    </div>
                }
        </div>
    </div>
  )
}

export default Header