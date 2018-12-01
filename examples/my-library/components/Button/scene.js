import React from "react";
import { controllers } from "react-scenes";
import Button from "./index";

export const ButtonScene = {
  title: "Buttons>Default",
  target: ({ props, state, setState, pushEvent }) => {
    return (
      <Button
        {...props}
        onMouseLeave={() => {
          pushEvent("customEvent", { hello: "world" });
        }}
      >
        {props.title}
      </Button>
    );
  },
  options: {
    bg: "light",
    centered: true
  },
  events: ["onClick"],
  controllers: [
    {
      key: "title",
      title: "title",
      controller: controllers.text("Button")
    },
    {
      key: "color",
      title: "color",
      controller: controllers.color()
    },
    {
      key: "size",
      title: "select",
      controller: controllers.select("big", ["", "big", "small"])
    },
    {
      key: "disabled",
      title: "disabled",
      controller: controllers.boolean()
    }
  ],
  docs: `#### Button

\`title\` _string_
Enter button title here.

\`color\` _string_
supported formats: RGB, RGBA, HSL, HSLA, HEX

\`size\` _string_

options: big and small

\`disabled\` _boolean_
`
};
