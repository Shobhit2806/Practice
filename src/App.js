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

  

 
  return (
    <div className="App">
      <h1>Hello World!</h1>
      
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
