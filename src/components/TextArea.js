import React, { Component } from "react";

import "../cssComponents/TextArea.css";

export default class TextArea extends Component {
  render() {
    return (
      <div>
        <textarea
          name=""
          id="editor"
          cols="80"
          rows="10"
          onChange={this.props.inputText}
          value={this.props.text}
        ></textarea>
      </div>
    );
  }
}
