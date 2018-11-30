import React from "react";
import { controllers } from "react-scenes";
import Welcome from "./";

export const WelcomeScene = {
  title: "Welcome>Default",
  target: Welcome,
  options: {
    bg: "light",
    centered: true
  },
  events: ["onClick"],
  controllers: [
    {
      key: "theme",
      title: "select",
      controller: controllers.select("dark", ["", "dark", "light"])
    }
  ],
  docs:
    "This could be our little documentation for this components. *Markdown* **supported**."
};
