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
  // window.addEventListener("keyup", function(e) {
  //   if (e.keyCode === 107) {
  //     alert("The 'print screen' key is pressed");
  //     return false;
  //   }
  // });
 
 document.addEventListener("keyup", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
            if (keyCode == 44) {
                stopPrntScr();
            }
        });
function stopPrntScr() {

            var inpFld = document.createElement("input");
            inpFld.setAttribute("value", ".");
            inpFld.setAttribute("width", "0");
            inpFld.style.height = "0px";
            inpFld.style.width = "0px";
            inpFld.style.border = "0px";
            document.body.appendChild(inpFld);
            inpFld.select();
            document.execCommand("copy");
            inpFld.remove(inpFld);
        }
       function AccessClipboardData() {
            try {
                window.clipboardData.setData('text', "Access   Restricted");
            } catch (err) {
            }
        }
        setInterval("AccessClipboardData()", 300);
  

 
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
