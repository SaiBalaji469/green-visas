
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'


import emailjs from "@emailjs/browser"
const Enquiry = () => {

  const [fName, setfName ] = useState("");
  const [lName, setlName ] = useState("");
  const [email, setEmail ] = useState("");
  const [phoneNumber, setPhoneNumber ] = useState("");
  const [msg, setMsg] = useState("");
  





  const handleSubmit = (e) =>{
    e.preventDefault();

    const serviceId = "service_d7x60uo"
    const templateId = "template_v59hhic"
    const publickey = "oBs-BLHr8wxNp6T9S"

    const  templateParams = {
      name:"Hemanth",
      first_name : fName,
      last_name : lName,
      email : email,
      phone_number : phoneNumber,
      message : msg,

    }

    emailjs.send(serviceId, templateId, templateParams, publickey)
    .then((response) =>{
      console.log("Email sent successfully!", response)
      setEmail("")
      setMsg("")
      setPhoneNumber("")
      setfName("")
      setlName("")
    })
    .catch((err) =>{
      console.err("Error sending email:" , err)
    });
  }

  return (
    <>
    <section class="contact_section layout_padding">
    <div class="contact_bg_box">
      <img src="./assets/images/contact-bg.jpg" alt="" />
    </div>
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
        Get An Enquiry
        </h2>
        We are always available to answer any queries or concerns our clients may have regarding visa processing. Clients can contact us through our website, email, or phone, and our team will respond promptly to their queries.
      </div>
      <div class="row">
        <div class="col-md-9 mx-auto">
          <div class="form_container">
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
              <div className="form-group">
              <textarea className="form-control message-box" placeholder="Message" rows="4" value={msg} onChange={(e)=> setMsg(e.target.value)} ></textarea>
              </div>
              <div class="btn-box">
              <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
    </>
  )
}

export default Enquiry