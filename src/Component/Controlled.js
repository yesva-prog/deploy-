import React,{useState} from 'react'
import Test1 from './Test1';

function Controlled() {
    const[name,setName]=useState(" ");

    function changes(e){
        setName(e.target.value)
    }
  return (
    <div>
        <form>
            {name} <br/>
            <input type="text" placeholder='enter name' onChange={changes} />
            <Test1 changing={changes} />
        </form>
    </div>
  )
}

export default Controlled