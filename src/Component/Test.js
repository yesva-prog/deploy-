import React from 'react'

function Test(props) {
  return (
    <div>
      <input type="text" placeholder='Enter name' onChange={props.changes}/>
    </div>
  )
}

export default Test

