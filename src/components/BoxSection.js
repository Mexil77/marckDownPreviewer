import React, { Component } from "react";

import "../cssComponents/BoxSection.css";

import TextArea from "./TextArea";
import DisplayText from "./DisplayText";

export default class BoxSection extends Component {
  state = {
    text: `Hola
    `,
  };

  inputText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <div id="boxSection">
        <TextArea text={this.state.text} inputText={this.inputText} />
        <DisplayText text={this.state.text} />
      </div>
    );
  }
}
