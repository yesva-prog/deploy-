import React from 'react'

function Uncontrolled(props) {
  
    const inputEl=React.useRef(" ");
    function Submit(){
        alert(inputEl.current.value)
    }
  return (
    <div>
        <input type="text" ref={inputEl}/>
        <input type ="text" ref={inputEl}/>
        <input type="text" defaultValue={props.defaults}/>
        <button onClick={Submit}>clicks</button>
    </div>
  )
}

export default Uncontrolled