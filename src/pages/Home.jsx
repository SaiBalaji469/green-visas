import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Contact from './Contact';
import Enquiry from '../Compontents/Enquiry';
import Services from './Services';
import About from './About';
import Countries from './Countries';
import Header from '../Compontents/Header';

const Home = () => {
  return (
    <>
    <div>
  
  <div className="hero_area">
    {/* <!-- header section strats --> */}
    <div className="hero_bg_box">
      <div className="img-box">
        <img src='./assets/images/image.png' alt="" />
      </div>
    </div>

    {/* <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_link-container">
            <a href="" className="contact_link1">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                KPHB, Hyderabad - 500072
              </span>
            </a>
            <a href="" className="contact_link2">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +91 9705323377
              </span>
            </a>
            <a href="" className="contact_link3">
              <i className="fa fa-envelope" aria-hidden="true"></i>
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
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
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
             
                <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contact
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                
                <Link className="dropdown-item" to="Contact">Free Appointment</Link>
                <Link className="dropdown-item" to="Enquiry">Get an Enquiry</Link>
              </div>
            </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header> */}
    {/* <!-- end header section -->
    <!-- slider section --> */}
    <section className=" slider_section ">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-7">
                  <div className="detail-box">
                    
                    <h1>
                      We Make Visa <br/>
                      Process Faster
                    </h1>
                    <p>
                      At GREEN VISAS, we are committed to providing exceptional visa processing services, ensuring that our clients have a smooth and enjoyable travel experience.

                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1"> Read more </a>
                      <a href="" className="btn-2">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-7">
                  <div className="detail-box">
                    <h1>
                      We Make Visa <br/>
                      Process Faster
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod magna aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1"> Read more </a>
                      <a href="" className="btn-2">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-7">
                  <div className="detail-box">
                    <h1>
                      We Make Visa <br/>
                      Process Faster
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod magna aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1"> Read more </a>
                      <a href="" className="btn-2">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container idicator_container">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>
    {/* <!-- end slider section --> */}
  </div>

  {/* <!-- service section --> */}

  <section className="service_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our services
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="box ">
            <div className="img-box">
              <img src="./assets/images/s4.png" alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                Student Visa
              </h6>
              <p>
                A student visa is a type of visa issued to individuals who wish to study in a foreign country at a recognized educational institution. Student visas allow holders to enroll in academic programs, attend classNamees, and participate in educational activities. The visa may have conditions such as maintaining full-time enrollment and restrictions on employment.            
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box ">
            <div className="img-box">
              <img src="./assets/images/s2.png" alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                Work Visa
              </h6>
              <p>
                A work visa, also known as a work permit or employment visa, is a type of visa that allows individuals to legally work in a foreign country. Work visas are typically granted based on a specific job offer from an employer in the destination country. The visa may have restrictions regarding the type of work, duration of stay, and employer.  
                </p>              
                  <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box ">
            <div className="img-box">
              <img src="./assets/images/s1.png" alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                Business Visa
              </h6>
              <p>
                A business visa is a type of visa issued to individuals traveling to another country for business-related purposes. It allows the holder to engage in business activities such as attending meetings, conferences, or negotiating contracts. 
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box ">
            <div className="img-box">
              <img src="./assets/images/s3.png" alt=""/>
            </div>
            <div className="detail-box">
              <h6>
                Tourist Visa
              </h6>
              <p>
                A tourist visa is a type of visa granted to individuals traveling to another country for leisure, recreation, or tourism purposes. It allows holders to visit tourist attractions, sightseeing, and engage in recreational activities during their stay.   
                           </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end service section -->

  <!-- about section --> */}

  <section className="about_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 px-0">
          <div className="img_container">
            <div className="img-box">
              <img src="./assets/images/about-img.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-0">
          <div className="detail-box">
            <div className="heading_container ">
              <h2>
                Who Are We?
              </h2>
            </div>
            <p>
              GREEN VISAS is a leading visa processing company based in India. Our mission is to provide hassle-free visa processing services to our clients, ensuring a smooth and stress-free travel experience. Our team of experienced professionals is dedicated to providing personalized and efficient services, ensuring that our clients' visa applications are processed accurately and in a timely manner.
            </p>
            <div className="btn-box">
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="service_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Why Choose Us:
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="box ">
            <div className="img-box">
              <i className="fas fa-users" style={{fontSize: "75px"}}></i>
            </div>
            <div className="detail-box">
              <h6>
                Experienced and professional team:
              </h6>
              <p>
                "An experienced and professional team consists of skilled individuals who possess a wealth of knowledge and expertise in their respective fields. 
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box ">
            <div className="img-box">
              <i className="fas fa-rocket" style={{fontSize: "75px"}}></i>
            </div>
            <div className="detail-box">
              <h6>
                Quick and efficient services: 
              </h6>
              <p>
                We understand the importance of time when it comes to visa processing, and we strive to provide quick and efficient services, ensuring that our clients' travel plans are not disrupted.                </p>              
                  <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box ">
            <div className="img-box">
              <i className="fas fa-handshake" style={{fontSize: "75px"}}></i>
            </div>
            <div className="detail-box">
              <h6>
                Personalized approach
              </h6>
              <p>
                We understand that each client has unique requirements, and we provide personalized services tailored to meet their individual needs.              
                </p>
                <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box ">
            <div className="img-box">
              <i className="far fa-smile" style={{fontSize: "75px"}}></i>
            </div>
            <div className="detail-box">
              <h6>
                Customer satisfaction:
              </h6>
              <p>
                We prioritize customer satisfaction above everything else and strive to exceed our clients' expectations in every way possible.             
               </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end service section -->

  <!-- about section --> */}

  <section className="about_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 px-0">
          <div className="img_container">
            <div className="img-box">
              <img src="https://t4.ftcdn.net/jpg/04/44/53/81/240_F_444538125_8rPiGmCTJU4vrf5soJwlic0PmTMkD8KZ.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-0">
          <div className="detail-box">
            <div className="heading_container ">
              <h2>
                Vision:
              </h2>
            </div>
            <p>
              Our vision is to be the most reliable and efficient visa processing company in India, providing exceptional services to our clients and contributing to the growth of the travel and tourism industry.
            </p>
            <div className="heading_container ">
              <h2>
                Mission:
              </h2>
            </div>
            <p>
Our mission is to provide efficient and professional visa processing services to our clients, ensuring that their travel plans are not hindered by visa-related issues. We aim to simplify the visa application process and make it accessible to everyone, irrespective of their location or nationality.
            </p>
            <div className="btn-box">
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
{/* 
  <!-- end about section -->

  <!-- country section --> */}

  <section className="country_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Choose Country
        </h2>
        <p>
          Select country you want to apply visa for
        </p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <a href="" className="box">
            <img src="./assets/images/c3.jpg" alt=""/>
            <div className="detail-box">
              <h3>
                USA
              </h3>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="" className="box">
            <img src="https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <div className="detail-box">
              <h3>
                UK
              </h3>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="" className="box">
            <img src="./assets/images/c2.jpg" alt=""/>
            <div className="detail-box">
              <h3>
                Canada
              </h3>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="" className="box">
            <img src="./assets/images/c5.jpg" alt=""/>
            <div className="detail-box">
              <h3>
                Australia
              </h3>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="" className="box">
            <img src="./assets/images/c1.jpg" alt=""/>
            <div className="detail-box">
              <h3>
                Europe
              </h3>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="" className="box">
            <img src="https://images.alphacoders.com/410/41081.jpg" alt=""/>
            <div className="detail-box">
              <h3>
                Switzerland
              </h3>
            </div>
          </a>
        </div>
        {/* <!-- <div className="col-md-4">
          <a href="" className="box">
            <img src="images/c6.jpg" alt="">
            <div className="detail-box">
              <h3>
                Spain
              </h3>
            </div>
          </a>
        </div> --> */}
      </div>
    </div>
  </section>
{/* 
  <!-- end country section -->

  <!-- contact section --> */}
  <section className="contact_section layout_padding">
    <div className="contact_bg_box">
      <img src="./assets/images/contact-bg.jpg" alt=""/>
    </div>
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Contact Us
        </h2>
        We are always available to answer any queries or concerns our clients may have regarding visa processing. Clients can contact us through our website, email, or phone, and our team will respond promptly to their queries.
      </div>
      <div className="row">
        <div className="col-md-9 mx-auto">
          <div className="form_container">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
              </div>
              <div className="form-group ">
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="btn-box">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- end contact section -->

  <!-- client section --> */}


<section className="client_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          What Says Our Client
        </h2>
      </div>
      <div className="client_container">
        <div className="carousel-wrap">
          <div className="owl-carousel">
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src="./assets/images/client-1.jpg" alt="" className="img-1" />
                </div>
                <div className="detail-box">
                  <h5>
                    Mark Evans
                  </h5>
                  <h6>
                    Magna
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src="./assets/images/client-2.jpg" alt="" className="img-1" />
                </div>
                <div className="detail-box">
                  <h5>
                    Anthony White
                  </h5>
                  <h6>
                    Magna
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src="./assets/images/client-1.jpg" alt="" className="img-1" />
                </div>
                <div className="detail-box">
                  <h5>
                    Mark Evans
                  </h5>
                  <h6>
                    Magna
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src=".assets/images/client-2.jpg" alt="" className="img-1" />
                </div>
                <div className="detail-box">
                  <h5>
                    Anthony White
                  </h5>
                  <h6>
                    Magna
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end client section -->


  <!-- info section --> */}
  <section className="info_section ">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="info_logo">
            <a className="navbar-brand" href="index.html">
              <span>
               Green Visas
              </span>
            </a>
            <p>
              At GREEN VISAS, we are committed to providing exceptional visa processing services, ensuring that our clients have a smooth and enjoyable travel experience.
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_links">
            <h5>
              Useful Link
            </h5>
            <ul>
              <li>
                <a href="">
                  Dolor sit amet, consectetur
                </a>
              </li>
              <li>
                <a href="">
                  Magna aliqua. Ut enim ad
                </a>
              </li>
              <li>
                <a href="">
                  Minim veniam
                </a>
              </li>
              <li>
                <a href="">
                  Quisdotempor incididunt r
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_info">
            <h5>
              Contact Us
            </h5>
          </div>
          <div className="info_contact">
            <a href="" className="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                HIG 209, 3rd Floor, Above Punjab National Bank, Karthikeya Sweet Home, Road No. 5, Rythu Bazar Road, KPHB Phase 1, KPHB, Kukatpally, Hyderabad - 500072,
              </span>
            </a>
            <a href="" className="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +91 9705323377
              </span>
            </a>
            <a href="" className="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
               greenvisashyd@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_form ">
            <h5>
              Newsletter
            </h5>
            <form action="#">
              <input type="email" placeholder="Enter your email"/>
              <button>
                Subscribe
              </button>
            </form>
            <div className="social_box">
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end info_section -->




  <!-- footer section --> */}
  <footer className="container-fluid footer_section">
    <p>
      &copy; <span id="displayYear"></span> All Rights Reserved By
      <a href="https://html.design/">Green Visas</a>
    </p>
  </footer>
  {/* <!-- footer section --> */}



</div>


    
   
    </>
  )
}

export default Home;