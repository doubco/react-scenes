import React, { Component } from "react";

import Scenes from "./engine";
import scenes from "./index";

const initialContent = `<!DOCTYPE html>
<html>
<head>
  <style>
    @import url("https://use.typekit.net/akb0bwm.css");
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    *:focus {
      outline: none;
    }

    html {
      box-sizing: border-box;
    }
    
    body {
      font-family: "sofia-pro";
      font-weight: 400;
      margin:0;
      padding:0;
    }

    strong {
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div id="frame"></div>
</body>
</html>`;

let frame;

frame = {
  initialContent,
  mountTarget: "#frame"
};

let panels = [];
let actions = [];

class Library extends Component {
  render() {
    return (
      <Scenes
        frame={frame}
        actions={actions}
        panels={panels}
        title="🌉 My Scenes"
        config={{
          panel: {
            position: "right" // left, right, top, bottom, false
          }
        }}
        scenes={Object.keys(scenes).map(key => scenes[key])}
      />
    );
  }
}

export default Library;
