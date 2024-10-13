import React from 'react'
import './Login.css'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
const Login = () => {
  return (
    <>
      <div class="container-fluid">
       <Header/>
        <div class="container  col-6 mx-auto pb-5 pt-3 ">
        <h1 class="text-center mb-3">Login</h1>
        <form onsubmit="vaLogin()">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter your email" required/>
             
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="Password" placeholder="Enter your Password" required/>
            </div>
            
            <button type="submit" class="btn btn-primary w-100" id="log">Login</button>
          </form>
        </div>
        </div>
        <Footer/>
    </>
   
  )
}

export default Login
