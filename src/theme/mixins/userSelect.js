export default () => {
  return (val = "none") => {
    return `
      -webkit-touch-callout: ${val};
        -webkit-user-select: ${val};
         -khtml-user-select: ${val};
           -moz-user-select: ${val};
            -ms-user-select: ${val};
                user-select: ${val};
    `;
  };
};
