import React, { useState } from 'react'

export default function About() {


const [mystyle, setMystyle] = useState(
    {
    color:'white',
    backgroundColor:'black'

}   )

const [btntext, setbtntext] = useState("Enable dark mode")

const toggleclick=()=>{

    if(mystyle.color==='white'){
        setMystyle(  {
            color:'black',
            backgroundColor:'white'
        
        } )
        setbtntext("enable dark mode")

    }
    else {
        setMystyle(  {
            color: 'white',
            backgroundColor:'black'
        
        } )
        setbtntext("disable dark mode")
    }
}
                    
        

  return (

    <>
    <div className="container" style={mystyle}>
        <h1 className='my-3' >  About us  </h1>
    <div className="accordion accordion-flush" id="accordionFlushExample" style = {mystyle}>
  <div className="accordion-item" style = {mystyle}>
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" style = {mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        what is Textutulus?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Text-Utils is a web tool to assist developers and other people in daily tasks by providing tools for manipulating text data</div>
    </div>
  </div>
  <div className="accordion-item" style = {mystyle}>
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" style = {mystyle}   type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        How can we access it?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">We can access it publicily by using various opertaion rightnow its undermaintainance but with time will update it with new projects </div>
    </div>
  </div>
  <div className="accordion-item" style = {mystyle}>
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" style = {mystyle}   type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Tools required to build it ?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> React with help of bootstraping and some basic concepts of props and proptypes and states

        </div>
    </div>
  </div>
</div>

    </div>
    <div>
    <button type="button" onClick={toggleclick} className="btn btn-primary">{btntext}</button>
    </div>
    </>


  )
}
