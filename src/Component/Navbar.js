import React from 'react'

function Navbar(props) {
     const name="yesh"
     const customStyle={
          color:"green",
          backgroundColor:"blue",
          fontSize:"40px"
     }
  return (
    <div>
        <h3>name:{props.name}</h3>
        <h2>id:{props.id}</h2>
        <h2 style={{color:"red"}}>THis is the navbar component</h2>
        {3+4}
        <h4 style={customStyle}>This is another style using js</h4>
        <div>
            <h4 className="styling">This is the css external content</h4>
        </div>
    </div>  
  )
}

export default Navbar
