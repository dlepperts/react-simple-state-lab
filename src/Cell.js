import React, {Component} from'react';

export default class Cell extends Component {

  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  render(){
    return (
      <div>`${this.state.color}</div>
    )
  }

}