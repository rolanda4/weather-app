import React, { useState } from 'react';
import Navigate from './Navigate';
import Pagecontent from './Pagecontent';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    
    <Router>
    <Navigate />
    <Pagecontent />
    </Router>
    
    
  );
}

export default App;
