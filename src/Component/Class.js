import React, { Component } from 'react'

export class Class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value:true
      }
    }

    cliks=()=>{
        if(this.state.value){
            return (<h1>You are correct</h1>)
        }
        else{
            return<h1>You are not correct</h1>
        }
    }  
    
  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={this.cliks}>click</button>
      </div>
    )
  }
}

export default Class


