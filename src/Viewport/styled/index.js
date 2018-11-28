import styled from "styled-components";

import UI, { theme } from "../../theme";
const { cond, is, or, get, variant } = UI;

export const ViewportContainer = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
`;

export const ViewportWrapper = styled.div.attrs(p => ({
  style: { width: p.w, minHeight: p.h }
}))`
  position: relative;
  margin: auto;
  border: ${cond({
      if: or(is.ne("w", "100vw"), is.ne("h", "100vh")),
      then: "1px",
      else: "0px"
    })}
    dashed ${variant.main};
  width: ${cond({ if: "w", then: null, else: "100vw" })};
  height: ${cond({ if: "h", then: null, else: "100vh" })};
  display: ${cond({ if: "centered", then: "flex", else: null })};
`;

export const TargetWrapper = styled.div`
  margin: auto;
`;
