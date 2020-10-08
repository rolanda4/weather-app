import React from 'react';
import download from './download.jpg';
import './App.css';

function Pagecontent() {
  return (
    <div className="App-Content">
      <h3>What is the weather like in . . .</h3>

      <form className="App-City-Btn">
        <input type="text" placeholder="Enter a City here"/>
        <br></br>
        <button class="btn btn-success" type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Pagecontent;
