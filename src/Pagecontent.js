import React, {useState} from 'react';
import './App.css';

function Pagecontent() {

    const[cityname, setCityname] = useState('Kasoa');
  return (
    <div className="App-Content">
      <h3>What is the weather like in . . .</h3>

        <form className="App-City-Btn">
          <input onChange={e => setCityname( e.target.value)} type="text" placeholder="Enter a City here"/>
          <br></br>
          <h>{cityname}</h>
          <br></br>
          <button class="btn btn-success" type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Pagecontent;
