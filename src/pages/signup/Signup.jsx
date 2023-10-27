import React, { useState } from "react";
import TextField from '../../components/textField/TextField'
import '../signin/Signin.css'
import { useNavigate } from 'react-router-dom';
import baseUrl from "../../api/api";
import { ToastContainer, toast, Zoom } from 'react-toastify';

function Signup() {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");
  
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    const userDetails = {
      name,
      email,
      password,
      mobileNumber
    };

    let users = await baseUrl.get("/user");
    users = users.data;
    users = users.find((user) => user.email === userDetails.email);
    if (!users) {
      try {
        await baseUrl.post("/user/signup", userDetails);
        toast.success("Account registered successfully.Kindly login");
      } catch (error) {
        console.error("Error Signing Up", error);
      }
      setTimeout(() => {
                navigate("/");
            }, 2000);
    } else {
      toast.error("User Email already exists");
    }
  };

  return (
    <div className="form">
      <div className="form__box">
          <div className="form__right">
            <div className="form__padding-right">
                <form onSubmit={handleSignUp}>
                  <h1 className="form__title" style={{textAlign:"center"}}>Signup</h1>
                  <TextField className="form__name input" type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                  <TextField className="form__email input" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <TextField className="form__password input" type="password" placeholder="******" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <TextField className="mobile input" type="tel" placeholder="Mobile Number" value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
                  <div style={{marginTop:"50px",textAlign:"center"}} className='signBut'>
                    <button>Signup</button>
                  </div>
                </form>
                <p>Already Registered <a className="form__link" href="/signin">Go to Signin</a></p>
            </div>
          </div>
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

export default Signup