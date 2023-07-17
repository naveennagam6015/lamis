import React from 'react'
import './Login.scss'




import "bootstrap/scss/bootstrap.scss";
// import loginBg from "../assets/images/bg-img.jpg"
import google from "../assets/images/google.png"

function Login() {
  return (
    <section className='bg-login '>
      <div className='login-box'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-6 mx-auto'>

              <div className="w-60  mx-auto">
                <h5 className='pt-4'><strong>Login</strong></h5>
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

                  <label htmlFor="">Email <sup>*</sup> </label>
                  <br />
                  <input placeholder='mail@website.com' className='w-100 form-control btn-outline-secondary rounded-pill py-2 px-4' type="text" />
                  <br />
                  <label htmlFor="">Password <sup>*</sup></label>
                  <br />
                  <input placeholder='min. 8 character' className='w-100 form-control  btn-outline-secondary rounded-pill py-2 px-4' type="password" />
                 
                  <div className='d-flex'>
                    <input type="checkbox" />
                    <label>Remember me</label>
                    <a className='' href="">forget password</a>
                  </div>
                  <button className=" w-100 btn btn-primary rounded-pill py-2 " type="button">
                    <strong className='text-white'>
                      Login</strong></button>

                </form>
                <p>Not registered yet? <a href="">Create an Account</a></p>
                <p>&#169; 2020 Felix All rights reserved</p>
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