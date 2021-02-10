import React, { Component } from "react";

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
