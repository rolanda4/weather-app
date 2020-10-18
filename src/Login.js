import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import './LoginPage.js';


function Login() {
  return (
      <>
          <Link className="Login-btn" type ="login" to ='/LoginPage'>
            Login
          </Link>
      </>
  );
}


export default Login;
