import React from 'react'
import './Contact.css'
import dressImages from './Images/dress.png'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
const Contact = () => {
  return (
    <div>
      <div class="container-fluid">
        <Header/>
        
    <div class="container pb-3 ">
        <h1 class="text-center pt-3">Contact Us</h1>
        <div class="row pt-3 pb-3">
            <div class="col-lg-6">
                 <img src={dressImages} className="img-fluid mx-auto d-block" alt="contact" style={{height: "300px"}}/>
            </div>
            <div class="col-lg-6 ">
                <form >
                    <div class="form-group">
                        <label for="Name">Name:</label>
                        <input type="text" class="form-control" id="Name"  placeholder="Enter your name" required/>
                    </div>
                    <div class="form-group">
                      <label for="email">E-mail:</label>
                      <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter your email" required/>
                     </div>
                    <div class="form-group">
                      <label>Message:</label>
                      <textarea class="form-control" placeholder="Enter your message" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary w-100 mt-3" id="log">Login</button>
                  </form>
            </div>
        </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact
