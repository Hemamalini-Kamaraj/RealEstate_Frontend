import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import TextField from '../../components/textField/TextField'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUpload } from '@fortawesome/free-solid-svg-icons'
import baseUrl from '../../api/api'
import { ToastContainer, toast, Zoom } from 'react-toastify';

function Profile() {

    const [profileUpdate, setProfileUpdate] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    let jsonData = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const token = jsonData["token"];

    const fetchUserData = async () => {
        const res = await baseUrl.get("/user/profile", { headers: { Authorization: `bearer ${token}` } });
        setName(res.data.name);
        setEmail(res.data.email);
        setMobileNumber(res.data.mobileNumber)
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        const profileData = {
            name,
            mobileNumber
        }

        await baseUrl.put("/user/profile", profileData, { headers: { Authorization: `bearer ${token}` } });
        toast.success("User profile updated");
        setProfileUpdate(false);
    }

  return (
    <>
        <Header />
        <div className='profile'>
            <h2>Profile</h2>
            {
                profileUpdate==false ? 
                    <div className='detailCards'>
                        <div style={{marginBottom:"20px"}} className='editBut'>
                            <button onClick={() => setProfileUpdate(true)}>
                                <FontAwesomeIcon icon={faEdit} />&nbsp;Edit Profile
                            </button>
                        </div>
                        <TextField
                            label="Full Name"
                            value={name}
                            disabled
                        />
                        <TextField
                            label="Email"
                            value={email}
                            disabled
                        />
                        <TextField
                            label="Mobile Number"
                            value={mobileNumber}
                            disabled                        
                        />
                    </div>
                :
                    <div className='detailCards'>
                        <TextField
                            label="Full Name"
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Enter First Name"   
                            value={name}
                            onChange={(e)=>setName(e.target.value)}                     
                        />
                        <TextField
                            label="Email"
                            name="email"
                            id="email"
                            type="email"
                            value={email}
                            disabled
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <TextField
                            label="Mobile Number"
                            name="mobile"
                            id="mobile"
                            type="tel"
                            placeholder="Enter Mobile Number" 
                            value={mobileNumber}      
                            onChange={(e)=>setMobileNumber(e.target.value)}                 
                        />
                        <div style={{marginBottom:"60px"}} className='uploadBut'>
                              <button onClick={handleUpdateProfile}>
                                <FontAwesomeIcon icon={faUpload} />&nbsp;Update Profile
                            </button>
                        </div>
                    </div>
            }
            <ToastContainer
                position='top-center'
                autoClose={3000}
                draggable={false}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme='light'
            />
        </div>
        <Footer />
    </>
  )
}

export default Profile