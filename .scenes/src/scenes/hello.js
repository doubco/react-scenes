import { controllers } from "react-scenes";

import Hello from "../components/hello";

const docs = `## Hello
  You could add docs or notes like this in _markdown_.
`;

export default {
  title: "Hello>World",
  target: Hello,
  controllers: [
    {
      key: "desc",
      title: "Description",
      controller: controllers.textarea(
        "Welcome to React Scenes 🌉 \nSimplest way to test/create react components."
      )
    },
    {
      key: "hello",
      title: "Hello?",
      controller: controllers.boolean(true)
    },
    {
      key: "who",
      title: "Who?",
      controller: controllers.select("earthling", [
        { key: "Earthling", value: "earthling" },
        { key: "Martian", value: "martian" }
      ])
    },
    {
      key: "bg",
      title: "Background",
      controller: controllers.color("#FBD58D", "hex")
    },
    {
      key: "color",
      title: "Text Color",
      controller: controllers.color("#000", "hex")
    },
    {
      key: "width",
      title: "Width",
      controller: controllers.range(90)
    }
  ],
  events: ["onClick"],
  options: {
    theme: "light", // ligth, dark, white, black
    centered: true
  },
  docs
};
