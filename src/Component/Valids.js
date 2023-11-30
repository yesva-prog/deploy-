import React, { useMemo, useState } from 'react'

function Valids() {
    const[count,setCount]=useState(0);
    const[number,setNumber]=useState(5);
    const factorial=useMemo(()=>(fact(number)),[number])
    function increment(){
        setCount(count+1)
    }
  
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increment}>+</button>
      
    </div>
  )
}
  const fact=(n)=>{
    let answer=1;
    for(var i=n ; i>=n;i--){
        answer=answer*i
    }
    console.log("this is factorial funcrtion")
    return answer;
  }
export default Valids
