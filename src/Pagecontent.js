import React, {useState} from 'react';
import Login from './Login';
import './App.css';

function Pagecontent() {
    const[cityname, setCityname] = useState(null);
  return (
    <div className= "App-Content" >
    <Login />

    <div className="App-Main">
      <h3>What is the weather like in . . .</h3>

        <form className="App-City-Btn">
          <input onChange={e => setCityname( e.target.value)} type="text" placeholder="Enter a City here"/>
          <br></br>
          <h>{cityname}</h>
          <br></br>
          <button class="btn btn-success" type="submit">Submit</button>
        </form>
    </div>
    </div>
  );
}

export default Pagecontent;
