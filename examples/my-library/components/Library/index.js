import React from "react";

import { Scenes } from "react-scenes";

import { ButtonScene } from "../Button/scene";
import { WelcomeScene } from "../Welcome/scene";

export default () => {
  return (
    <Scenes title="My Scenes" standalone scenes={[WelcomeScene, ButtonScene]} />
  );
};
