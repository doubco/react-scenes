export default [
  {
    _id: "toggle-panel-position",
    icon: ({ props }) => {
      const directions = ["left", "top", "right", "bottom"];
      const icons = ["⬅️", "⬆️", "➡️", "⬇️"];
      const current = directions.indexOf(props.config.panel.position);
      return icons[current];
    },
    onClick: ({ props }) => {
      const directions = ["left", "top", "right", "bottom"];
      const current = directions.indexOf(props.config.panel.position);
      const isLast = current == directions.length - 1;
      props.setConfig({
        panel: {
          ...props.config.panel,
          position: isLast ? directions[0] : directions[current + 1]
        }
      });
    }
  },
  {
    _id: "disable-cache",
    icon: ({ props, store }) => {
      return props.config.caching ? "⏸" : "⏺";
    },
    onClick: ({ props, state, store, setState }) => {
      props.setConfig({ caching: !props.config.caching });
    }
  },
  {
    _id: "toggle-ui",
    icon: "🕶",
    onClick: ({ props }) => {
      props.setConfig({ ui: !props.config.ui });
    }
  },
  {
    _id: "toggle-sizer",
    icon: "📐",
    active: ({ props }) => props.config.sizer,
    onClick: ({ props }) => {
      props.setConfig({ sizer: !props.config.sizer });
    }
  }
];
