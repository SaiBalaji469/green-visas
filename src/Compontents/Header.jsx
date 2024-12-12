import React from 'react'
import { Outlet, Link } from "react-router-dom";
import About from '../pages/About';
import Services from '../pages/Services';
import Countries from '../pages/Countries';
import Contact from '../pages/Contact';
import Enquiry from './Enquiry';
import Home from '../pages/Home';

const Header = () => {
  return (
    <>
    {/* <!-- header section strats --> */}
   

    <header class="header_section">
      <div class="header_top">
        <div class="container-fluid">
          <div class="contact_link-container">
            <a href="" class="contact_link1">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
           KPHB, Hyderabad - 500072
              </span>
            </a>
            <a href="" class="contact_link2">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +91 9030418457
              </span>
            </a>
            <a href="" class="contact_link3">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>
               greenvisashyd@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <span>
                <img src="./assets/images/logo eidt by ram.png" alt="" height="70px" className="logo" />
              </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""></span>
            </button>

            <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  {/* <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a> */}
                  <Link className="nav-link" to="Home">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="Services">Services</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="About">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Countries">Countries</Link>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="contact.html" Linkto="">Contact us</a>
                  <Link className="nav-link" to="Contact">Contact</Link>

                </li> */}
                <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contact
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* <a className="dropdown-item" href="#">Free Appointment</a> */}
                
                <Link className="dropdown-item" to="Contact">Free Appointment</Link>
                <Link className="dropdown-item" to="Enquiry">Get an Enquiry</Link>
                {/* <a className="dropdown-item" href="#">Get an Enquiry</a> */}
              </div>
            </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    {/* <!-- end header section --> */}
  </>
  )
}

export default Header