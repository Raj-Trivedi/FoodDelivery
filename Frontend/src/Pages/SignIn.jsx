import React, { useState } from 'react';
import Login from '../Component/Login/Login.jsx';
import Signup from '../Component/Signup/Signup.jsx';
import '../Component/Login/Login.css'; // Import styles

const SignIn = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const toggleForm = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <div className='login-page-background'>
      {isSigningUp ? (
        <Signup onToggle={toggleForm} />
      ) : (
        <Login onToggle={toggleForm} />
      )}
    </div>
  );
};

export default SignIn;