import React, { Component } from "react";
import Demo from "../../mock/Mock";

class Buttons extends Component {
  render() {
    return <button id={this.props.name} onClick={this.props.onClick}>{this.props.name}</button>;
  }
}
Buttons.defaultProps = { Content: Demo };
export default Buttons;