import React from 'react';
// import { useHistory,Routes,Route } from "react-router-dom"
import './Login.scss';
import LoginLogo from "../assets/images/login-logo.jpg";
import "bootstrap/scss/bootstrap.scss";
// import loginBg from "../assets/images/bg-img.jpg"
import google from "../assets/images/google.png"
// import Navbar from './Navbar';

function Login() {

  // const history = useHistory();

  //   const loginClick = () => {
  //       history.push("./Navbar")
  //   }
  const loginClick = () => {
    // navigate('./Navbar');
    console.log("Clicked")
  }




  // var house = {
  //   colur: "blue",
  //   price: 10000,
  //   hyderabad: true
  // }
  // console.log(house)

  // var cars = {
  //   name: "nexa",
  //   model: 2021
  // }

  // let bike = {
  //   names: "",
  //   model: 2020,
  //   price: "2 Lakhs",
  //   red: false,
  //   // engine:,
  //   naveen: cars

  // }
  // console.log(bike.names)
  // document.getElementById("google").innerHTML= "or Sign in with Email" ;

  // let fruits = ["banana", "apple", "promigranate"];
  // document.write("fruits")
  // fruits.push("mango")
  // fruits[1]="orange"
  // fruits[3]="lemon"
  // alert(fruits.shift())
  // fruits.unshift("graps")
  // for (let fruit of fruits) {
    // alert(fruits.length)

  // }


  // let matrix = [
  //   [1, 2, 3],
  //   [4, 5, 6],
  //   [7, 8, 9]
  // ]
  // alert(matrix[2][2])

  // let styles =["Jazz", "Blues"];
  // styles.push("Rock-n-Roll")
  // // styles.push([1]"Classics")
  // alert(styles);

  return (
    <section className='bg-login '>
      <div className='login-box'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-6 mx-auto'>

              <div className="w-60  mx-auto">
                <a href="https://legacy.reactjs.org/">
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
                    <small id='google'>or Sign in with Email</small>
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
                    <a href="https://legacy.reactjs.org/" className='login-font text-decoration-none text-purple '><b  >Forget password?</b></a>
                  </div>
                  <div className='pt-0'>
                    <button

                      onClick={loginClick}

                      className=" w-100 btn btn-primary rounded-pill py-2 " type="button">
                      <strong className='text-white login-font'>
                        Login</strong></button>

                    {/* <Routes>
                      <Route path="/Navbar" element={<Navbar />} />
                    </Routes> */}

                  </div>
                  <div className='py-2'>
                    <small>Not registered yet? <a className='text-decoration-none text-purple ' href="https://legacy.reactjs.org/"> <b> Create an Account</b></a></small>

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