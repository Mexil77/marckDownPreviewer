import React, { Component } from "react";
import ReactMarckdown from "react-markdown";

import "../cssComponents/DisplayText.css";

export default class DisplayText extends Component {
  render() {
    return (
      <div id="previewer">
        <ReactMarckdown>{this.props.text}</ReactMarckdown>
      </div>
    );
  }
}
