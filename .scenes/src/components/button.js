import React, { Component } from "react";

const colors = {
  primary: {
    main: "#333",
    negative: "#fff"
  },
  positive: {
    main: "#41D39B",
    negative: "#fbfbfb"
  },
  destructive: {
    main: "#EC5353",
    negative: "#fbfbfb"
  }
};

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title = "Button", big, small, theme, onClick } = this.props;

    const wrapperStyle = {
      borderRadius: 2,
      cursor: "pointer",
      background: colors[theme].main,
      float: "left",
      height: big ? 48 : small ? 24 : 32,
      padding: big ? 16 : small ? 4 : 8
    };

    const titleStyle = {
      fontFamily: "monospace",
      lineHeight: "16px",
      color: colors[theme].negative,
      fontSize: big ? 16 : small ? 10 : 14
    };

    return (
      <div style={wrapperStyle} onClick={onClick}>
        {title && <div style={titleStyle}>{title}</div>}
      </div>
    );
  }
}

export default Button;
