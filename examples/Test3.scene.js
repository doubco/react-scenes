import React, { Component } from "react";

import controls from "./engine/controls";

import Bar from "/imports/ui/components/Bar";

export default {
  title: "Hello",
  target: Bar,

  stylesheet: `.test123{ background:#000 }`,
  styleClassNames: ["BarStyle"],
  controllers: [
    {
      key: "size",
      title: "Range",
      controller: controls.range(5)
    },
    {
      key: "bg",
      title: "Bg",
      controller: controls.color("#ccc")
    }
  ],
  events: ["onClick"],
  options: {
    centered: true,
    theme: "light" // ligth, dark, none
  },
  docs: `## Bar 
  **Hello World**
  `
};
