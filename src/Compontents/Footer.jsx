import React from 'react'

const Footer = () => {
  return (
    <>
     {/*<!-- info section --> */}
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
                Call : +91 8143090660, +91 9030418457, +91 9705323377
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
                  <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#" aria-label="YouTube">
                    <i className="fab fa-youtube" aria-hidden="true"></i>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
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
    </>
  )
}

export default Footer