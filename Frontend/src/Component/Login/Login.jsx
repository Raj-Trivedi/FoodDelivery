import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import googleicon from '../../../../assets/frontend_assets/img/login/g2-removebg-preview.png'
import logo from '../../../../assets/frontend_assets/img/logos/illustration-organic-food.png'
import login_assets from '../../../../assets/frontend_assets/img/login/5739256.jpg'

const Login = () => {
  const navigate= useNavigate();

  return (
    <div className="login-container"> 
      <div className="login-box">
        <img onClick={()=>navigate("/")}
        className='login-logo' src={logo} alt="" />
       
        <div className="login-detail">
          <h1>Welcome Back </h1>
          <p className='filldetail'>Please enter your details</p>
          <form className='login-form'>
            <div className="input-box">
              <p>Email address</p>
              <input type="email" />
              <p>Password</p>
              <input type="password" />
            </div>
            <div className="remember">
              <div className="remember-box">
                <input type="checkbox" />
                <p>Remember me</p>

              </div>
              <span><a href="">Forgot password</a></span>
              
            </div>
            <div className="signup-btn">
              <button>Log In</button>
            </div>
            <div className="signinWithGoogle">
              <button> <img src={googleicon} alt="" />Sign in with Google</button>
            </div>
            <div className="signup-toggle">
              <p>Don't have an account?  <a href="/" >  SignUp</a></p>

            </div>
          </form>
        </div>
         <div className="login-img">
          {/* <img src={login_assets} alt="" /> */}

        </div>
      </div>
     

    </div>
  )
}

export default Login