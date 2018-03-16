import Controllers from "../Controllers";
import Docs from "../Docs";
import Code from "../Code";
import Events from "../Events";

export default [
  {
    _id: "controllers",
    component: Controllers,
    active: ({ state }) => state.active == "controllers",
    icon: "🕹",
    actions: [
      {
        _id: "toggle-centered",
        icon: "📍",
        active: ({ props }) => props.options.centered,
        onClick: ({ props }) => {
          props.setOptions({
            ...props.options,
            centered: !props.options.centered
          });
        }
      },
      {
        _id: "toggle-theme",
        icon: ({ props, store }) => {
          const directions = ["light", "dark", "none", "black"];
          const icons = ["⚪️", "⚫️", "⬜️", "⬛️"];
          const current = directions.indexOf(props.options.theme);
          return icons[current];
        },
        onClick: ({ props, state, store }) => {
          const directions = ["light", "dark", "none", "black"];
          const current = directions.indexOf(props.options.theme);
          const isLast = current == directions.length - 1;
          props.setOptions({
            ...props.options,
            theme: isLast ? directions[0] : directions[current + 1]
          });
        }
      },
      {
        _id: "reset",
        icon: "↩️",
        onClick: ({ props, state, store, setState }) => {
          let scenes = store.get("scenes");

          if (scenes) {
            delete scenes[props._id];
            store.set({ scenes });
          }

          props.reset();
        }
      }
    ]
  },
  {
    _id: "docs",
    component: Docs,
    active: ({ state }) => state.active == "docs",
    icon: "📌"
  },
  {
    _id: "events",
    component: Events,
    active: ({ state }) => state.active == "events",
    icon: "🚀"
  },
  {
    _id: "code",
    component: Code,
    active: ({ state }) => state.active == "code",
    icon: "🤓"
  }
];
