import React, { Component } from "react";

import controls from "./engine/controls";

import { Button } from "/imports/ui/components/Buttons";

const docs = `## Button 
  I'm a button.

`;

export default {
  title: "Buttons>Default",
  target: Button,
  controllers: [
    {
      key: "title",
      title: "Title",
      controller: controls.text("Button")
    },
    {
      key: "theme",
      title: "Theme",
      controller: controls.select("primary", [
        { key: "Primary", value: "primary" },
        { key: "Positive", value: "positive" },
        { key: "Destructive", value: "destructive" }
      ])
    },
    {
      key: "ghost",
      title: "Ghost?",
      controller: controls.boolean(false)
    },
    {
      key: "big",
      title: "Big?",
      controller: controls.boolean(false)
    },
    {
      key: "small",
      title: "Small?",
      controller: controls.boolean(false)
    }
  ],
  events: ["onClick"],
  options: {
    theme: "light" // ligth, dark, none
  },
  docs
};
