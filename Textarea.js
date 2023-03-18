import React , { useState } from 'react'

export default function Textarea(props) {
  

  const[text, settext] = useState(' ');



  const handleOnChange =(event)=>{
   // console.log("on change");
  //text split is done to make an array of words
  //mx-2 is class of bootstratp to provide space 
    settext(event.target.value );
    
  }
  let a = text.split(" ").length;

  const handleOnclick=()=>{
  
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("uppercase mode has been enabled","success");
  }
  const handleOnclick1 =()=>{
   let newtext1= text.toLowerCase()
    settext(newtext1);
    props.showalert("lowercase mode has been enabled","success");
  }
  const clear =()=>{
   
     settext(" ");
     props.showalert("clear mode has been enabled","success");
   }
   const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showalert("speak","success");
  }
  const reverse1 =(event)=>{
  let arr1= text.split(" ");
   arr1 = arr1.reverse(" ");
  let newtext= arr1.join();
  settext(newtext);
  props.showalert("reverse mode has been enabled","success");
   }

   const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    settext(newText);
    props.showalert("capitilize mode has been enabled","success");
}


  return (
        
<>  

    <div>
<div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
    <h1  >   {props.heading}  </h1>  
<textarea className="form-control"  style={{backgroundColor:props.mode==='light'?'white':'grey'}} value= {text.length> 0 ? text:' Enter something here   '} id="mybox" onChange={handleOnChange}  rows="10"></textarea>
</div>
<button type="button" className={`btn btn-${props.mode==='light'?'primary':'light'}`}  onClick={handleOnclick}>
     convert to Uppercase
</button> 

<button type="button" className={` mx-2 btn btn-${props.mode==='light'?'primary':'light' }` } onClick={handleOnclick1}> 
    convert to Lowercase
</button>
<button type="button" className={`  mx-2  btn btn-${props.mode==='light'?'primary':'light'}`} onClick={clear}> 
   clear
</button>
<button type="button" className={`  mx-2  btn btn-${props.mode==='light'?'primary':'light'}`} onClick={speak} >Speak
</button>

<button type="button" className={` mx-2 btn btn-${props.mode==='light'?'primary':'light'}`} onClick={reverse1} >reverse
</button>
<button type="button" className={` mx-2  btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleCapitalize} >Capitilize
</button>


 </div>


 <div className="container " style={{color:props.mode==='light'?'black':'white'}}>
                      <h2>Analyse summary </h2>
           <p>number of words are {a-1}  and number of letters are {text.length}  characters </p> 
           <p>  {0.008*a} minute read </p>
  </div>


<div style={{color:props.mode==='light'?'black':'white'}}>
  <h2  >Preview</h2>
  <p>{text.length>0?text:'Enter something here'}   </p>
  
  
</div>
    </>
  )
}
