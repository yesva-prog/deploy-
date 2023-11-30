import React from 'react'


class FirstComponent extends React.Component
{
    render(){
        return(
            <h4>This is the FirstChild component</h4>
        )
    }
}

class SecondComponent extends React.Component
{
    render(){
        return(
            <h4>This is the SecondChild Component</h4>
        )
    }
}

class ThirdComponent extends React.Component
{
    render(){
        return(
            <>
            <h4>This is the ThirdChildComponent</h4>
            <SecondComponent />
            </>
        )
    }
}

function FourthChild(){
    return(
        <>
        <ThirdComponent />
        <h4>Thus is the Functional Component</h4>
        </>
    )
}
function Nested() {
  return (
    <div>
        <h1>This is the parent component</h1>
        <FirstComponent />
       
        <FourthChild/>
    </div>
  )
}

export default Nested