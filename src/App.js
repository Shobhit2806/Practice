import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Pdf from './Pdf'
import Landing from './Landing'
const App = ()=> {
  window.addEventListener("keyup", function(e) {
    if (e.keyCode === 107) {
      alert("The 'print screen' key is pressed");
      return false;
    }
  });
  

 
  return (
    <div className="App">
      
      
      <Router>
          <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/pdf' component={Pdf} />
          </Switch>
        
      </Router>


     </div>
  );
}

export default App;
