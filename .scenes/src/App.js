import React, { Component } from "react";
import { Scenes } from "react-scenes";

import buttonScene from "./scenes/button";
import helloScene from "./scenes/hello";

const initialContent = `<!DOCTYPE html>
<html>
<head>
  <style>

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
      margin:0;
      padding:0;
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

let config = {
  panel: {
    position: "right" // left, right, top, bottom
  }
};

class Library extends Component {
  render() {
    return (
      <Scenes
        title="🌄 My Scenes"
        config={config}
        scenes={[helloScene, buttonScene]}
        frame={frame}
        actions={actions}
        panels={panels}
      />
    );
  }
}

export default Library;
