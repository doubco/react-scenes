import styled from "styled-components";

import UI from "../../../theme";

const { cond, is, get, variant, size } = UI;

export const Parent = styled.div`
  width: 100%;
  font-size: ${size`item:title.size|px`};
  font-weight: 600;
`;

export const Node = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${size`item.height|px`};
  padding: ${size`item.padding|px`};
  background: ${cond({
    if: "active",
    then: variant.contrast,
    else: variant.light
  })};
  color: ${cond({
    if: "active",
    then: variant.main,
    else: variant.contrast
  })};
  padding-left calc(${size`item.padding|px`} * 2);
  cursor: pointer
  font-size: ${size`item:title.size|px`};
  font-weight: 600;
  cursor: pointer;
`;

export const Badge = styled.div`
  float: right;
`;
export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
  cursor: pointer;
`;
