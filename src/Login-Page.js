import React, { useState } from 'react';
import './App.css';

function LoginPage() {

  const[userLoggedin, setuserLoggedin] = useState(false);

  return (

    // { userLoggedin === true && <p>Welcome {'username'}</p>};
    <div className="App-LoginPage">
     <form className="App-LoginForm">
    <label>Username:</label>
    <input type="text" placeholder="Kofi2020" id="username"/>

    <label>Password:</label>
    <input type="text" placeholder="******"/>
    <button class="btn btn-success" type="submit" onClick={userLoggedin}>Login</button>
    </form>
    </div>
  );
}

export default LoginPage;
