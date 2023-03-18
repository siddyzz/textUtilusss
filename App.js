
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React ,{useState} from 'react';
import Alert from './components/Alert';
function App() {

const [alert, setalert] = useState(null);

const showalert=(message,type)=>{
setalert({
  message: message ,
  type: type
})

setTimeout(() => {
  setalert(null)
}, 1000);
}


  const [mode1, setmode] = useState("light");
  const togglemode=()=>{
    if(mode1==="light"){
      setmode("dark");
      document.body.style.backgroundColor='black';
      showalert("dark mode has been enabled", "success");
      
    }
    else{
      setmode("light");
      document.body.style.backgroundColor='white';
      showalert("light mode has been enabled","success");
    }
  }

   return (
   <>
<Navbar title ="textutilus" mode={mode1} togglemode={togglemode} home = "Home"/>  
<Alert  alert={alert}/>
<div className="container"> 
 <Textarea  heading = "Analyze the following text " mode={mode1} showalert={showalert}/>  
</div>




{/* <div>
  <About/>
</div> */}

   </>
  );  
  
  
}

export default App;
