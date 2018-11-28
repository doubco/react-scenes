import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const DocumentStyle = createGlobalStyle`

  ${reset};

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  *:focus {
    outline: none;
  }

  html {
    box-sizing: border-box;
    margin: 0;
  }

  body {

    margin: 0;
  }

`;
