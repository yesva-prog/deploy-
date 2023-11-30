import React, { useState } from 'react'

function Names() {
    const[name,setName]=useState(" ");
    const[todo,setTodo]=useState([]);

    function change(event){
        setName(event.target.value)
    }

    function AddClick(){
        if(name !== ""  && todo !== ""){
            setTodo([...todo,name])
            setName("");
        }
    }
  return (
    <>
    <div>
      <input type="text" placeholder='Enter products' value={name} onChange={change}/>
      <button onClick={AddClick}>Add</button>
    </div>
    <div>
       {todo.map((todo)=>(
          <li>{todo}</li>
       ))}
    </div>
    </>
  )
}

export default Names
