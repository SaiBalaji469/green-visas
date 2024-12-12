import React, { useEffect, useState } from 'react'
import Header from '../Compontents/Header'
import Footer from '../Compontents/Footer'

import emailjs from "@emailjs/browser"

const Contact = () => {
  const [todayDate, setTodayDate] = useState('');
  const [fName, setfName ] = useState("");
  const [lName, setlName ] = useState("");
  const [email, setEmail ] = useState("");
  const [phoneNumber, setPhoneNumber ] = useState("");
  const [msg, setMsg] = useState("");
  const [country, setCountry] = useState("");
  


  useEffect(() => {
    // Set the initial value of the date input to today's date
    const date = new Date().toISOString().split('T')[0];
    setTodayDate(date);
  }, []);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    const serviceId = "service_q3yy542"
    const templateId = "template_dkb19bj"
    const publickey = "oBs-BLHr8wxNp6T9S"

    const  templateParams = {
      name:"Hemanth",
      first_name : fName,
      last_name : lName,
      email : email,
      phone_number : phoneNumber,
      message : msg,
      today_date : todayDate,
      country : country,

    }

    emailjs.send(serviceId, templateId, templateParams, publickey)
    .then((response) =>{
      console.log("Email sent successfully!", response)
      setEmail("")
      setMsg("")
      setPhoneNumber("")
      setfName("")
      setlName("")
      setCountry("")
    })
    .catch((err) =>{
      console.err("Error sending email:" , err)
    });
  }



  return (
    <>

      <section className="contact_section layout_padding">
        <div className="contact_bg_box">
          <img src="./assets/images/contact-bg.jpg" alt="Contact background" />
        </div>
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Get An Free Appointment</h2>
            <p>
              We are always available to answer any queries or concerns our clients may have regarding visa processing. Clients can contact us through our website, email, or phone, and our team will respond promptly to their queries.
            </p>
          </div>
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="form_container">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" placeholder="First Name" value={fName} onChange={(e)=> setfName(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" placeholder="Last Name" value={lName} onChange={(e)=> setlName(e.target.value)}/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" placeholder="Phone Number" value={phoneNumber } onChange={(e)=> setPhoneNumber(e.target.value)}/>
                    </div>
                  </div>
                  {/* Country select dropdown */}
                  <div className="form-row">
                    {/* <div className="form-group col-md-6">
                      <select className="form-control" aria-label="Country">
                        <option value="">Select Country</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                      </select>
                    </div> */}
                      <div className="form-group col-md-6">
                      <select
                        className="form-control"
                        aria-label="Country"
                        value={country} // Bind the select element to the state
                        onChange={handleCountryChange} // Update the state on selection change
                      >
                        <option value="">Select Country</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6 col-sm-12">
                      <input
                        type="date"
                        className="form-control"
                        value={todayDate}
                        min={todayDate} // Restrict selection to today or later
                      />
                    </div>
                  </div>
                  {/* Date input field */}
                  {/* <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="date"
                        className="form-control"
                        value={todayDate}
                        min={todayDate} // Restrict selection to today or later
                      />
                    </div>
                  </div> */}
                  <div className="form-group">
                    <textarea className="form-control message-box" placeholder="Message" rows="4" value={msg} onChange={(e)=> setMsg(e.target.value)} ></textarea>
                  </div>
                  <div className="btn-box">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;