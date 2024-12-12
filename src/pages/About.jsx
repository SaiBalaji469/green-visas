import React from 'react'
import Header from '../Compontents/Header'
import Footer from '../Compontents/Footer'
export default function About() {
    return (
        <>
  
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
      <Footer/>
      </>
    )
}

