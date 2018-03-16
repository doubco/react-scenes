import styled from "styled-components";

const bg = {
  dark:
    'url("data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20200%20200%22%3E%3Cg%3E%3Cpath%20fill=%22#777%22%20d=%22M0%200h100v100H0zm100%20100h100v100H100z%22/%3E%3Cpath%20fill=%22#555%22%20d=%22M100%200h100v100H100zM0%20100h100v100H0z%22/%3E%3C/g%3E%3C/svg%3E")',
  light:
    'url("data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20200%20200%22%3E%3Cg%3E%3Cpath%20fill=%22#eee%22%20d=%22M0%200h100v100H0zm100%20100h100v100H100z%22/%3E%3Cpath%20fill=%22#fff%22%20d=%22M100%200h100v100H100zM0%20100h100v100H0z%22/%3E%3C/g%3E%3C/svg%3E")',
  none: "none",
  black: "#000"
};

export const SceneContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  ${p => `background:${bg[p.theme || "light"]};`};
  background-size: 20px;
  display: flex;
  flex-wrap: wrap;
  ${p => p.position == "bottom" && `flex-direction: column-reverse`};
  ${p => p.position == "right" && `flex-direction: row-reverse`};
`;

export const PanelWrapper = styled.div`
  background: #fff;
  color: #000;
  ${p => !p.ui && `display:none`};

  ${p =>
    p.position == "left" || p.position == "right"
      ? `
     width: ${p.size}px;
     height: 100%
    `
      : `
     height: ${p.size}px;
     width: 100%
    `};
`;

export const ViewportWrapper = styled.div`
  ${p => {
    if (!p.ui)
      return `
       width: 100%;
       height: 100%
      `;
    if (p.position == "left") {
      return `
       width: calc(100% - ${p.size}px);
       height: 100%
      `;
    }

    if (p.position == "right") {
      return `
       width: calc(100% - ${p.size}px);
       height: 100%
      `;
    }

    if (p.position == "top") {
      return `
       height: calc(100% - ${p.size}px);
       width: 100%
      `;
    }

    if (p.position == "bottom") {
      return `
       height: calc(100% - ${p.size}px);
       width: 100%
      `;
    }
  }};

  display: flex;
  float: left;
  overflow: auto;
`;
