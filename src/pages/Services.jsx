import React from 'react'
import Header from '../Compontents/Header'
import Footer from '../Compontents/Footer'

export default function Services() {
  return (
    <>

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
              <img src="./assets/images/s4.png" alt="" />
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
              <img src="./assets/images/s2.png" alt="" />
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
              <img src="./assets/images/s1.png" alt="" />
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
              <img src="./assets/images/s3.png" alt="" />
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
  <Footer/>
    </>
  )
}
