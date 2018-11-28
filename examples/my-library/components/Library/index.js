import React from "react";
import { Scenes, controllers } from "react-scenes";

import Button from "../Button";

const ButtonScene = {
  title: "Buttons>Default",
  target: ({ props, state, setState, pushEvent }) => {
    return <Button {...props}>{props.title}</Button>;
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
    }
  ],
  docs: "Hello World"
};

export default () => {
  return <Scenes title="My Scenes" standalone scenes={[ButtonScene]} />;
};
