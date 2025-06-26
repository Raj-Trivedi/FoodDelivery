import React from 'react';
import './Signup.css'; // We will create this file
import { useNavigate } from 'react-router-dom';
import googleicon from '../../../../assets/frontend_assets/img/login/g2-removebg-preview.png';
import logo from '../../../../assets/frontend_assets/img/logos/illustration-organic-food.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../../Context/AppContext';
import { useContext } from 'react';

const Signup = ({ onToggle }) => {
  const navigate = useNavigate();
  const { setIsAuthenticated, SetUser } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form[0].value.trim();
    const email = form[1].value.trim();
    const pass = form[2].value;
    const confirm = form[3].value;
    if (!name || !email || !pass || !confirm) {
      toast.error('Please fill all fields!', { position: 'top-center', autoClose: 2000 });
      return;
    }
    if (pass !== confirm) {
      toast.error('Passwords do not match!', { position: 'top-center', autoClose: 2000 });
      return;
    }
    setIsAuthenticated(true);
    SetUser(email );

    

    toast.success('Signup successful!', { position: 'top-center', autoClose: 2000 });

    

    setTimeout(() => navigate('/'), 1200);

  };

  return (
    <>
      <img
        onClick={() => navigate("/")}
        className='signup-page-logo'
        src={logo}
        alt="Company Logo"
      />
      <div className="signup-container">
        <div className="signup-box">
          <div className="login-img">
            {/* This div is for the background image */}
          </div>

          <div className="login-detail">
            <h1>Create Account</h1>
            <p className='filldetail'>Please enter your details to sign up.</p>
            <form className='login-form' onSubmit={handleSubmit}>
              <div className="input-box">
                <p>Full Namess</p>
                <input type="text" placeholder='Enter your full name' required />
              </div>
              <div className="input-box">
                <p>Email address</p>
                <input type="email" placeholder='Enter your email' required />
              </div>
              <div className="input-box">
                <p>Password</p>
                <input type="password" placeholder='Create a password' required />
              </div>
              <div className="input-box">
                <p>Confirm Password</p>
                <input type="password" placeholder='Confirm your password' required />
              </div>
              
              <div className="remember">
                <div className="remember-box">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">I agree to the Terms & Conditions</label>
                </div>
              </div>


              <div className="signup-btn">
                <button type="submit">Sign Up</button>
              </div>

              <div className="signinWithGoogle">
                <button type="button"> 
                  <img src={googleicon} alt="Google Icon" />
                  Sign up with Google
                </button>
              </div>


              <div className="signup-toggle">
                <p>Already have an account? <a href="#" onClick={onToggle}>Log In</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;