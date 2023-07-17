import React from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../../src/assets/images/logo.png";
import Home from "./Home"
import About from './About';
import Carrer from './Carrer';
import Contact from './Contact';
import './styles.css'
const  Navbar  = () => {
    return (<>
       
            <nav className='navbar bg-primary navbar-expand-md py-0'>
                <div className='container '>
                <a className='navbar-brand' href="/">
                            <img height={45} src={logo} alt="" />
                        </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='navbar-collapse collapse' id='navbarTogglerDemo01'>
                       
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item px-3'>
                                <Link to="/Home" className='text-white text-decoration-none'>Home</Link>
                            </li>
                            <li className='nav-item px-3'>
                                <Link to="/About" className='text-white text-decoration-none'>About Us</Link>
                            </li>
                            <li className='nav-item px-3'>
                                <Link to="/Carrer" className='text-white text-decoration-none'>Carrer</Link>
                            </li>
                            <li className='nav-item px-3'>
                                <Link to="/Contact" className='text-white text-decoration-none'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <section>
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Carrer" element={<Carrer />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </section>
       
        <Outlet />
    </>)
}

export default Navbar