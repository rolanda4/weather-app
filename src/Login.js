import React from 'react';
import {Link} from 'react-router';
import './App.css';

function Login() {
  return (
      <div>
          <Link className="Login-btn" type="login" to={"/LoginPage"}>
            Login</Link>
      </div>
  );
}

export {Link};
export default Login;
