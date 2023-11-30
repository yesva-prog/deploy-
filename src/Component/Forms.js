import React,{useState} from 'react'

function Forms() {
    const[name,setName]=useState("");
    const[pass,setPass]=useState("");

    function change(e){
        setName(e.target.value);
    }
     
    function changes(e){
        setPass(e.target.value);
    }

    function ToggleClick(){
        if(name === "" || pass === ""){
            alert("your field is in empty")
        }else{
            alert("Thank you for the response")
        }
    }
  return (
    <div>
         <form>
            <input type="text" value={name} onChange={change} placeholder='enterName'/>
            <input type="password" value={pass} onChange={changes} placeholder='enterPass' />
            <button onClick={ToggleClick}>Submit</button>
         </form>
    </div>
  )
}

export default Forms
