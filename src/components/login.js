import React from 'react';
// import { useHistory,Routes,Route } from "react-router-dom"
import './Login.scss';
import LoginLogo from "../assets/images/login-logo.jpg";
import "bootstrap/scss/bootstrap.scss";
// import loginBg from "../assets/images/bg-img.jpg"
import google from "../assets/images/google.png"
import Navbar from './Navbar';

function Login() {

  // const history = useHistory();
  
  //   const loginClick = () => {
  //       history.push("./Navbar")
  //   }

  // const loginClick = () => {
  //   navigate('./Navbar', {replace: true});
  //   console.log("Clicked")
  // }
  return (
    <section className='bg-login '>
      <div className='login-box'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-6 mx-auto'>

              <div className="w-60  mx-auto">
                <a href="">
                  <img className='py-5' width={40} src={LoginLogo} alt="" />
                </a>
                <h5 ><strong>Login</strong></h5>
                <div className='pb-4'>
                  <small >See your groth and get consulting support!</small>
                </div>
                <form className='needs-validation' >
                  <button className=" w-100  form-control btn-outline-secondary rounded-pill py-2 px-4" type="button">
                    <div>
                      <img width={37} className='px-2' src={google} alt="" />
                      <strong className='text-black '>

                        Sign in with Google</strong>
                    </div></button>
                  <div className='text-center'>
                    <small>or Sign in with Email </small>
                  </div>

                  <label className='pt-3'>Email <sup>*</sup> </label>
                  <input placeholder='mail@website.com' className='w-100 form-control btn-outline-secondary rounded-pill py-3 px-4' type="text" />
                  <label className='pt-3'>Password <sup>*</sup></label>
                  <input placeholder='min. 8 character' className='w-100 form-control  btn-outline-secondary rounded-pill py-3 px-4' type="password" />
                  <div className='d-flex justify-content-between py-2 pb-4'>
                    <div>
                      <input className='form-check-input' type="checkbox" />
                      <label className='px-2'>Remember me</label>
                    </div>
                    <a href='' className='login-font text-decoration-none text-purple '><b  >Forget password?</b></a>
                  </div>
                  <div className='pt-0'>
                    <button 
                    
                    // onClick={loginClick} 
                    
                    className=" w-100 btn btn-primary rounded-pill py-2 " type="button">
                      <strong className='text-white login-font'>
                        Login</strong></button>

                    {/* <Routes>
                      <Route path="/Navbar" element={<Navbar />} />
                    </Routes> */}

                  </div>
                  <div className='py-2'>
                    <small>Not registered yet? <a className='text-decoration-none text-purple ' href=""> <b> Create an Account</b></a></small>

                  </div>
                  <div className='pt-5'>
                    <small  >&#169; 2020 Felix All rights reserved</small>

                  </div>
                </form>

              </div>
            </div>
            <div className='col-6 loginBg'>
              {/* <div className='col-6' style={{backgroundImage:`url(${loginBg})`}}> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login