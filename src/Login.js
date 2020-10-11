import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Login() {
  return (
      <>
          <Link className="Login-btn" type ="login" to ='/Login-Page'>
            Login
          </Link>
      </>
  );
}


export default Login;
