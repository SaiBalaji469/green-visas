import React from 'react'
import Footer from '../Compontents/Footer'
import Header from '../Compontents/Header'

const Countries = () => {
  return (
    <>
  
    <section class="country_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Choose Country
        </h2>
        <p>
          Select country you want to apply visa for
        </p>
      </div>
      <div class="row">
        <div class="col-md-4">
          <a href="" class="box">
            <img src="./assets/images/c3.jpg" alt="" />
            <div class="detail-box">
              <h3>
                USA
              </h3>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="" class="box">
            <img src="https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <div class="detail-box">
              <h3>
                UK
              </h3>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="" class="box">
            <img src="./assets/images/c2.jpg" alt="" />
            <div class="detail-box">
              <h3>
                Canada
              </h3>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="" class="box">
            <img src="./assets/images/c5.jpg" alt="" />
            <div class="detail-box">
              <h3>
                Australia
              </h3>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="" class="box">
            <img src="./assets/images/c1.jpg" alt="" />
            <div class="detail-box">
              <h3>
                Europe
              </h3>
            </div>
          </a>
        </div>
        <div class="col-md-4">
          <a href="" class="box">
            <img src="https://images.alphacoders.com/410/41081.jpg" alt="" />
            <div class="detail-box">
              <h3>
                Switzerland
              </h3>
            </div>
          </a>
        </div>
        {/* <!-- <div class="col-md-4">
          <a href="" class="box">
            <img src="./assets/images/c6.jpg" alt="" />
            <div class="detail-box">
              <h3>
                Spain
              </h3>
            </div>
          </a>
        </div> --> */}
      </div>
    </div>
  </section>
  <Footer/>
  </>
  )
}

export default Countries