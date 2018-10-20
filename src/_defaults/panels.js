import List from "../Panels/List";
import Controllers from "../Panels/Controllers";
import Docs from "../Panels/Docs";
import Code from "../Panels/Code";
import Events from "../Panels/Events";
import ViewportResizer from "../Panels/ViewportResizer";

export const toggleCentered = {
  title: "Toggle Center",
  _id: "toggle-centered",
  icon: "📍",
  active: ({ get }) => {
    const active = get("active");
    const scenes = get("scenesData");
    const scene = scenes[active.scene];
    let options = scene ? scene.options || {} : {};

    return options.centered;
  },
  onClick: ({ set, get }) => {
    const config = get("config");
    const active = get("active");
    const scenes = get("scenesData");
    const scene = scenes[active.scene];
    let options = scene ? scene.options || {} : {};

    set(
      "scenesData",
      {
        [active.scene]: {
          ...scene,
          options: {
            ...options,
            centered: !options.centered
          }
        }
      },
      null,
      config.caching
    );
  }
};

export const toggleBackground = {
  title: "Toggle Background",
  _id: "toggle-bg",
  icon: ({ set, get }) => {
    const active = get("active");
    const scenes = get("scenesData");
    const scene = scenes[active.scene];
    let { bg } = scene ? scene.options || {} : {};
    const directions = ["light", "dark", "black", "none"];
    const icons = ["⚪️", "⚫️", "⬛️", "⬜️"];
    const current = directions.indexOf(bg);
    return icons[current];
  },
  onClick: ({ set, get }) => {
    const config = get("config");
    const active = get("active");
    const scenes = get("scenesData");
    const scene = scenes[active.scene];
    let options = scene ? scene.options || {} : {};

    const directions = ["light", "dark", "black", "none"];
    const current = directions.indexOf(options.bg);
    const isLast = current == directions.length - 1;
    set(
      "scenesData",
      {
        [active.scene]: {
          ...scene,
          options: {
            ...options,
            bg: isLast ? directions[0] : directions[current + 1]
          }
        }
      },
      null,
      config.caching
    );
  }
};

export const resetCache = {
  title: "Reset Cache",
  _id: "reset",
  icon: "↩️",
  onClick: ({ set, get, scenes }) => {
    const config = get("config");
    const active = get("active");
    const scene = scenes.find(s => s._id == active.scene);
    set(
      "scenesData",
      {
        [active.scene]: {
          options: scene.options,
          props: {}
        }
      },
      null,
      config.caching
    );
  }
};

export const toggleCaching = {
  title: "Toggle Caching",
  _id: "caching",
  icon: ({ get }) => {
    return get("config").caching ? "⏸" : "⏺";
  },
  onClick: ({ set, get }) => {
    const config = get("config");
    set("config", { caching: !config.caching });

    if (config.caching) {
      set("scenesData", {}, true, true, false);
    }
  }
};

export const resizer = {
  title: "Viewport Resizer",
  _id: "resizer",
  icon: "📏",
  active: ({ get }) => get("config").resizer,
  onClick: ({ set, get }) => {
    set("config", { resizer: !get("config").resizer });
  },
  component: ViewportResizer
};

export const reset = {
  title: "Reset All",
  _id: "reset",
  icon: "↩️",
  onClick: ({ set, get, scenes }) => {
    const inital = get("initial", true);

    set("config", inital.config, true, true);
    set("active", inital.active, true, true);
  }
};

export default [
  {
    title: "Scenes",
    _id: "scenes",
    component: List,
    active: ({ get }) => get("active").panel == "scenes",
    icon: "🗂",
    actions: [reset, resizer, toggleCaching]
  },
  {
    title: "Controllers",
    _id: "controllers",
    component: Controllers,
    active: ({ get }) => get("active").panel == "controllers",
    icon: "🎚",
    actions: [toggleCentered, toggleBackground, resetCache]
  },
  {
    title: "Events",
    _id: "events",
    component: Events,
    active: ({ get }) => get("active").panel == "events",
    icon: "🚀"
  },
  {
    title: "Code",
    _id: "code",
    component: Code,
    active: ({ get }) => get("active").panel == "code",
    icon: "📤"
  },
  {
    title: "Docs",
    _id: "docs",
    component: Docs,
    active: ({ get }) => get("active").panel == "docs",
    icon: "📓"
  }
];
