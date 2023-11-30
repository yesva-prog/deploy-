import React,{useState} from 'react'

function Todos() {
    const [name,setName]=useState("");
    const[todo,setTodo]=useState([]);
    
    function changes(e){
        setName(e.target.value)
    }

    function clicks(){
        if( name !== "" && todo !== ""){
            setTodo([...todo,name]);
            setName(" ");
        }
    }
  return (
    <div>
        <input type="text" value={name} onChange={changes}/>
        <button onClick={clicks}>Add</button>

        <div>
            <ol>
                {todo.map((todos)=>(  
                    <li><input type="radio"/>{todos}</li>
                ))}
            </ol>
        </div>

       
    </div>
  )
}

export default Todos
