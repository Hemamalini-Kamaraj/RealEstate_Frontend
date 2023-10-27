import React, { useState } from "react";
import './Signin.css'
import TextField from '../../components/textField/TextField'
import { useNavigate } from 'react-router-dom';
import baseUrl from "../../api/api";
import { ToastContainer, toast, Zoom } from 'react-toastify';

function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = async (e) => {
        e.preventDefault();

        const credentials = {
            email,
            password
        }
        
        try {
            const response = await baseUrl.post("/user/signin", credentials);

            const user = response.data;
            window.sessionStorage.setItem("loggedInUser", JSON.stringify(user));
            setEmail("");
            setPassword("");
            navigate("/");

        } catch (error) {
            toast.error("Check your email")
            }
        }
    
  return (
    <div className="form">
        <div className="form__box">
            <div className="form__right">
                <div className="form__padding-right">
                    <form onSubmit={handleSignin}>
                        <h1 className="form__title" style={{textAlign:"center"}}>Signin</h1>
                        <TextField className="form__email input" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <TextField className="form__password input" type="password" placeholder="******" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <div style={{marginTop:"50px",textAlign:"center"}} className='signBut'>
                            <button>Signin</button>
                        </div>
                    </form>
                    <span>Forgot &nbsp;<a className="form__link" href="/forgot-password">Username</a><a>/</a><a className="form__link" href="#">Password</a></span>
                    <p> <a className="form__link" href="/signup">Create your account</a></p>
                </div>
            </div>
        </div>
        <div className="card" style={{height:"100px",lineHeight:"0px",textAlign:"center"}}>
            <p>Demo Credential</p>
            <p>Email: test@gmail.com</p>
            <p>Password: test</p>
        </div>
        <ToastContainer
          position='top-center'
          autoClose={5000}
          transition={Zoom}
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
  )
}

export default Signin