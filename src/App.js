import React,{useEffect,useState} from 'react';
import './App.css';

const App = ()=> {

  const[pdf,setpdf] = useState([]);

  useEffect(() => {
    getpdf();
    
  },[pdf])

  //This is the code for connecting pdf from api
  // const getpdf = async () =>{
  //   const response = await fetch(
  //     `http://worldtpm.dx.am/api/test_api.php`
  //   );
  //   const data = await response.json();
  //   setpdf(data.pdf);
  //   console.log(pdf);
   
  // }

  const getpdf = () =>{
    setpdf("http:\/\/worldtpm.dx.am\/api\/certificates\/test_pdf.pdf")
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
