import React,{useState} from 'react'

function Hooks() {
    const[mystyle,setMystyle]=useState({
         color:"black",
         backgroundColor:"white"
    });
    const[text,setText]=useState("Enabled light mode")
     function ToggleClick(){
         if(mystyle.color === 'white'){
            setMystyle({
                  color:"black",
                  backgroundColor:"white"
            });setText("Enabled light mode")
         }else{
             setMystyle({
                    color:"white",
                    backgroundColor:"black"
             });setText("Enabled Dark Mode")
         }
     } 
  return (
    <div>
        <h3>{text}</h3>
       <div className='hooks'  style={mystyle}>
          <div className='hooks-title'>
             <h1>This is the hooks title</h1>
          </div>
          <div className='hooks-description'>
               <p>By using this concept we can change the color in dark or light mode</p>
          </div>
       </div>
        <button onClick={ToggleClick}>Change color</button>
    </div>
  )
}

export default Hooks


