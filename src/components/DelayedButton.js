// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

  handleClick = (event) => {
    const savedEvent = event

    setTimeout(this.props.onDelayedClick, this.props.delay)
  }

  render(){
    return(
      <button onClick={handleClick}></button>
    )
  }
}