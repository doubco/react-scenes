import { controllers } from "react-scenes";

import Button from "../components/button";

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
      controller: controllers.text("Button")
    },
    {
      key: "theme",
      title: "Theme",
      controller: controllers.select("primary", [
        { key: "Primary", value: "primary" },
        { key: "Positive", value: "positive" },
        { key: "Destructive", value: "destructive" }
      ])
    },
    {
      key: "big",
      title: "Big?",
      controller: controllers.boolean(false)
    },
    {
      key: "small",
      title: "Small?",
      controller: controllers.boolean(false)
    }
  ],
  events: ["onClick"],
  options: {
    theme: "light", // ligth, dark, white, black
    centered: true
  },
  docs
};
