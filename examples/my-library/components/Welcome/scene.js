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
      key: "title",
      title: "title",
      controller: controllers.text("Welcome")
    },
    {
      key: "description",
      title: "description",
      controller: controllers.text(
        "This is React Scenes v2. Advanced API, more sleek UI."
      )
    },
    {
      key: "features",
      title: "features",
      controller: controllers.array([
        "Draggeble UI",
        "Improved Navigation",
        "New improved viewport",
        "More control over internals"
      ])
    },
    {
      key: "theme",
      title: "select",
      controller: controllers.select("dark", ["", "dark", "light"])
    }
  ],
  docs:
    "This could be our little documentation for this components. *Markdown* **supported**."
};
