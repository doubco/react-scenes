import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      bg,
      color,
      hello,
      who = "earthling",
      desc = "",
      width = 90
    } = this.props;

    const wrapperStyle = {
      float: "left",
      width: `${width}vw`,
      background: bg,
      color: color,
      textAlign: "center",
      padding: 32,
      fontFamily: "monospace",
      fontSize: 16
    };

    const titleStyle = {
      fontSize: 24
    };

    const descriptionStyle = {};

    return (
      <div style={wrapperStyle}>
        <div style={titleStyle}>
          {hello ? "Hello" : "Bye bye"}{" "}
          {who === "earthling" ? "Earthling" : "Martian"}
        </div>
        <br />
        <div
          style={descriptionStyle}
          dangerouslySetInnerHTML={{
            __html: desc.replace(/(?:\r\n|\r|\n)/g, "<br>")
          }}
        />
      </div>
    );
  }
}

export default Hello;
