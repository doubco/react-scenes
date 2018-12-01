import styled from "styled-components";

import UI, { theme } from "../../theme";
const { cond, is, get } = UI;

export const ScenesWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  background: ${cond({
    if: is.eq("bg", "dark"),
    then: theme.bg.dark,
    else: cond({
      if: is.eq("bg", "light"),
      then: theme.bg.light,
      else: cond({
        if: is.eq("bg", "black"),
        then: theme.bg.black,
        else: null
      })
    })
  })};
  background-size: 24px;
  background-position: center;
`;
