import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello there",
    };
  }

  changeMessage() {
    this.setState( {
      message: "Thank For Visiting",
    } );
  }

  render() {
    return (
      <div className="msg">
        <h1 onMouseOver={() => this.changeMessage()}> {this.state.message}</h1>
      </div>
    );
  }
}
export default Message;
