import React,{useEffect,useState} from 'react';
import './App.css';

const App = ()=> {

  const[pdf,setpdf] = useState([]);

  useEffect(() => {
    getpdf();
    
  },[pdf])

  const getpdf = async () =>{
    const response = await fetch(
      `http://worldtpm.dx.am/api/test_api.php`
    );
    const data = await response.json();
    setpdf(data.pdf);
    console.log(pdf);
   
  }

  const openpdf = e =>{
    e.preventDefault();
    window.open(pdf);
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={openpdf}>Click me</button>
      
    </div>
  );
}

export default App;
