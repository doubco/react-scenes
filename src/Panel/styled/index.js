import styled, { css } from "styled-components";

import UI from "../../theme";

const { cond, is, get, variant, size, userSelect } = UI;

export const PanelWrapper = styled.div`
  position: fixed;
  z-index: 99999;
  width: ${size`panel.width|px`};
  max-height: calc(100vh - ${size`panel.margin|px`} * 2);
  height: ${cond({
    if: "minimized",
    then: css`
      ${size`item.height|px`} !important;
    `,
    else: size`panel.height|px`
  })};
  overflow: ${cond({
    if: "minimized",
    then: "hidden"
  })};
  margin: ${size`panel.margin|px`};
  display: flex;
  flex-direction: column;
  background: ${variant.lighter};
  border-radius: ${size`panel.radius|px`};
  box-shadow: ${size`panel.shadow`};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;

  font-weight: 400;
`;

export const Header = styled.div`
  position: relative;
  z-index: 1;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  height: ${size`item.height|px`};
  padding: ${size`item.padding|px`};
  background: ${variant.light};
  border-top-left-radius: ${size`panel.radius|px`};
  border-top-right-radius: ${size`panel.radius|px`};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: move;
  font-weight: 600;
`;

export const TopBar = styled.div`
  position: relative;
  z-index: 1;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  height: ${size`item.height|px`};
  background: ${variant.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.div`
  ${userSelect()};
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: ${size`button.height|px`};
  height: ${size`button.height|px`};
  margin: ${size`button.margin|px`};
  border-radius: ${size`button.height|px`};
  font-size: ${size`button:icon.size|px`};
  background-color: ${cond({ if: "active", then: variant.lighter })};
`;

export const BottomBar = styled.div`
  position: relative;
  z-index: 1;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  height: ${size`item.height|px`};
  background: ${variant.main};
  border-bottom-left-radius: ${size`panel.radius|px`};
  border-bottom-right-radius: ${size`panel.radius|px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PanelTitle = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  height: ${size`item.height|px`};
  padding: ${size`item.padding|px`};
  border-bottom: 1px solid ${variant.transparentize(0.9, null, "contrast")};
  background: ${variant.lighter};
  color: ${cond({
    if: "collapsed",
    then: variant.transparentize(0.4, null, "contrast"),
    else: variant.contrast
  })};
  position: sticky;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  top: 0px;
  font-size: ${size`item:title.size|px`};
  font-weight: 600;
`;

export const Panels = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const ResizeHandleLine = styled.div`
  width: 64px;
  height: 2px;
  border-radius: 2px;
  background: ${variant.contrast};
  opacity: 0.4;
  transition: 0.2s;
`;

export const ResizeHandle = styled.div`
  position: absolute;
  bottom: -16px;
  left: 0;
  cursor: ns-resize;
  width: ${size`panel.width|px`};
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    ${ResizeHandleLine} {
      opacity: 1;
    }
  }
`;

export const Minimize = styled.div`
  cursor: pointer;
  font-size: ${size`panel:minimize.size|px`};
  line-height: ${size`panel:minimize.size|px`};
  padding: ${size`panel:minimize.padding|px`};
  border-radius: ${size`panel:minimize.radius|px`};
  background: ${variant.transparentize(0.9, null, "contrast")};
  text-transform: uppercase;
`;
