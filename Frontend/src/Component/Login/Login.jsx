import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import googleicon from '../../../../assets/frontend_assets/img/login/g2-removebg-preview.png'
import logo from '../../../../assets/frontend_assets/img/logos/illustration-organic-food.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../../Context/AppContext'

const Login = ({ onToggle }) => {

  const { setIsAuthenticated, setUser } = React.useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form[0].value.trim();
    const pass = form[1].value;
    if (!email || !pass) {
      toast.error('Please fill all fields!', { position: 'top-center', autoClose: 2000 });
      return;
    }
    // Mock login: accept any email/pass, but show error for a specific case
    if (email === 'fail@example.com') {
      toast.error('Invalid credentials!', { position: 'top-center', autoClose: 2000 });
      return;
    }
    
    // Set user and authentication state
    setUser({ email });
    setIsAuthenticated(true);
    
    // Redirect to home page after successful login
    form.reset();
    
    toast.success('Login successful!', { position: 'top-center', autoClose: 2000 });
    setTimeout(() => navigate('/'), 1200);
  };

  return (
    <>
      <img
        onClick={() => navigate("/")}
        className='login-page-logo'
        src={logo}
        alt="Company Logo"
      />
      <div className="login-container">
        <div className="login-box">
          <div className="login-img">
            {/* This div is for the background image */}
          </div>

          <div className="login-detail">
            <h1>Welcome Back</h1>
            <p className='filldetail'>Please enter your details to sign in.</p>
            <form className='login-form' onSubmit={handleSubmit}>
              <div className="input-box">
                <p>Email address</p>
                <input type="email" placeholder='Enter your email' required />
              </div>
              <div className="input-box">
                <p>Password</p>
                <input type="password" placeholder='Enter your password' required />
              </div>
              
              <div className="remember">
                <div className="remember-box">
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <span><a href="#">Forgot password?</a></span>
              </div>

              <div className="signup-btn">
                <button type="submit">Log In</button>
              </div>

              <div className="signinWithGoogle">
                <button type="button"> 
                  <img src={googleicon} alt="Google Icon" />
                  Sign in with Google
                </button>
              </div>

              <div className="signup-toggle">
                <p>Don't have an account? <a href="#" onClick={onToggle}>Sign Up</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Login;