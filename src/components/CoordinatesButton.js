// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  
  handleClick = (event) => {
    const xCoord = event.clientX
    const yCoord = event.clientY

    this.props.onReceiveCoordinates([xCoord, yCoord])
  }
  render(){
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}