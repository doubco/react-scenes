import styled from "styled-components";
import is from "is";

const device = (d, devices) => {
  if (is.object(d)) return d;
  if (is.string(d)) return devices[d];
  return {};
};

export const ViewportContainer = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
`;

export const ViewportWrapper = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  ${p =>
    p.centered &&
    `
     display: flex;
    `};
`;

export const FrameContainer = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    padding: 0px;
    margin: 0px;
    display: block;
  }

  ${p => {
    const { width, height, unit } = device(p.device, p.devices);
    if (width && height) {
      return `
        width: ${width}${unit || "px"};
        height: ${height}${unit || "px"}
      `;
    }
  }};

  ${p =>
    p.device &&
    `
    border: 1px solid rgba(127,127,127,0.5)
  `};

  ${p =>
    !p.ready &&
    `
     display: none;
    `};
`;

export const FrameWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  ${p =>
    p.centered &&
    `
     display: flex;
    `};
`;

export const TargetWrapper = styled.div`
  margin: auto;
`;

export const ViewportSize = styled.div`
  position: absolute;
  font-size: 14px;
  line-height: 32px;
  bottom: 0px;
  right: 8px;
  color: rgba(127, 127, 127, 1);
  transition: 0.2s;
  ${p => !p.visible && `opacity:0`};
  font-family: Source Code Pro, Monaco, monospace;
`;
