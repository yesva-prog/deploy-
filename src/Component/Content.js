import React from 'react'

function Content(props) {
  return (
     <>
      <div className='content-wrapper'>
         <div className='content-head'>
            <h1>{props.title}</h1>
         </div>
         <div className='content-image'>
            <img src={props.imgURL} />
         </div>
         <div className='content-desc'>
             <p>{props.desc} </p>
         </div>
      </div>
     </>
  )
}

export default Content