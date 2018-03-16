import React, { Component } from "react";

import controls from "./engine/controls";

import Bar from "/imports/ui/components/Bar";

export default {
  title: "Demo>Test 123",
  target: Bar,
  controllers: [
    {
      key: "title",
      title: "Title",
      controller: controls.text("hello")
    },
    {
      key: "size",
      title: "Size",
      controller: controls.integer(5)
    },
    {
      key: "color",
      title: "Color",
      controller: controls.select("primary", ["primary", "x", "y"])
    },
    {
      key: "textarea",
      title: "Text",
      controller: controls.textarea("Hello World")
    },
    {
      key: "object",
      title: "Object",
      controller: controls.object({ hello: 123 })
    },
    {
      key: "boolean",
      title: "Boolean",
      controller: controls.boolean(true)
    },
    {
      key: "array",
      title: "Array",
      controller: controls.array([1, 2, 3])
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
