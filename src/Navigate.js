import React from 'react';
import Logocomp from './Logocomp';
import Searchbar from './Searchbar';
import './App.css';

function Navigate() {
  return (
    <div className="App-Nav-Bar">
        <Logocomp />
        <Searchbar />
    </div>
  );
}

export default Navigate;
