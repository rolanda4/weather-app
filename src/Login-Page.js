import React from 'react';
import './App.css';

function LoginPage() {
  return (
    <div className="App-LoginPage">
     <form className="App-LoginForm">
    <label>Username:</label>
    <input type="text" placeholder="Search"/>

    <label>Password:</label>
    <input type="text" placeholder="******"/>
    <button class="btn btn-success" type="submit">Login</button>
    </form>
    </div>
  );
}

export default LoginPage;
