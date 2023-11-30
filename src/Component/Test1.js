import React from 'react'

function Test1(props) {
  return (
    <div>
        <input type="text" onChange={props.changing} />
    </div>
  )
}

export default Test1