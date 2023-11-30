import React,{useState} from 'react'

function FormsUI() {
    const[name,setName]=useState(" ");
    const[pass,setPass]=useState(" ");

    function change(e){
      setName(e.target.value);
    }
    function changes(e){
        setPass(e.target.value);
    }

    function ToggleClick(){
        alert(`Welcome ${name} and ${pass}`)
    }
  return (
    <div>
        <form>
            <h1> {name}</h1>
            <input type="text" placeholder='Enter Name' onChange={change} />
            <input type="password" placeholder='Enter pass' onChange={changes} />
            <button onClick={ToggleClick}>submit</button>
        </form>
    </div>
  )
}

export default FormsUI