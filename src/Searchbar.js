import React from 'react';
import './App.css';

function Searchbar() {
  return (
    <>
    <form className="App-Search">
    <input type="text" placeholder="Search"/>
    <button class="btn btn-success" type="submit">Search</button>
    </form>
    </>
  );
}

export default Searchbar;
