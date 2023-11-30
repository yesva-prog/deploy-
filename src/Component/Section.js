import React from 'react'

function Section(props) {
  return (
    <>
      <div className='section-wrapper'>
         <div className='section-head'>
            <h1>{props.head}</h1>
         </div>
         <div className='section-description'>
             <p>{props.desc}</p>
         </div>
      </div>
    </>
  )
}

export default Section