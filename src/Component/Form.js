import React from 'react'

function Form() {
    const inputRef=React.useRef("");
    const handleSubmit =()=>{
          
          alert(inputRef.current.value);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <input type="text" ref={inputRef} />
         <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Form


