export default {
  colors: {
    white: {
      lighter: "#ffffff",
      light: "#f9f9f9",
      main: "#f3f3f3",
      dark: "#eeeeee",
      darker: "#eaeaea",
      contrast: "#222"
    },
    black: {
      lighter: "#000",
      light: "#111",
      main: "#222",
      dark: "#333",
      darker: "#444",
      contrast: "#f3f3f3"
    }
  },
  bg: {
    dark:
      'url("data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20200%20200%22%3E%3Cg%3E%3Cpath%20fill=%22#777%22%20d=%22M0%200h100v100H0zm100%20100h100v100H100z%22/%3E%3Cpath%20fill=%22#555%22%20d=%22M100%200h100v100H100zM0%20100h100v100H0z%22/%3E%3C/g%3E%3C/svg%3E")',
    light:
      'url("data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20200%20200%22%3E%3Cg%3E%3Cpath%20fill=%22#eee%22%20d=%22M0%200h100v100H0zm100%20100h100v100H100z%22/%3E%3Cpath%20fill=%22#fff%22%20d=%22M100%200h100v100H100zM0%20100h100v100H0z%22/%3E%3C/g%3E%3C/svg%3E")',
    black: "#000"
  },
  panel: {
    normal: {
      height: 320,
      radius: 8,
      width: 256,
      margin: 8,
      shadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
      minimize: {
        size: 8,
        padding: 4,
        radius: 2
      }
    }
  },
  item: {
    normal: {
      height: 44,
      padding: 8,
      title: {
        size: 12
      }
    }
  },
  button: {
    normal: {
      margin: 6,
      padding: 8,
      height: 32,
      icon: {
        size: 16
      }
    }
  },
  input: {
    normal: {
      padding: 8,
      margin: 8,
      height: 44,
      radius: 2,
      handle: 16,
      title: {
        size: 10,
        height: 10
      },
      value: {
        size: 12,
        height: 16
      }
    }
  },
  docs: {
    radius: {
      small: 2
    },
    padding: 8,
    spacing: {
      normal: 8,
      small: 4
    },
    body: {
      family: "",
      color: "#000",
      weight: 600,
      size: 12,
      height: 24
    },
    h1: {
      size: 32,
      height: 48,
      weight: 600
    },
    h2: {
      size: 28,
      height: 36,
      weight: 600
    },
    h3: {
      size: 24,
      height: 32,
      weight: 600
    },
    h4: {
      size: 20,
      height: 28,
      weight: 600
    },
    h5: {
      size: 16,
      height: 24,
      weight: 600
    },
    h6: {
      size: 14,
      height: 24,
      weight: 600
    },
    code: {
      background: "rgba(0,0,0,0.05)",
      color: "#000",
      family: "monospace",
      weight: 400,
      size: 12,
      height: 16
    },
    link: {
      normal: {
        color: "#3A88FD"
      },
      hover: {
        color: "#2873E2"
      }
    }
  }
};
