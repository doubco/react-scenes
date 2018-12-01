import styled from "styled-components";

import UI from "../../../theme";
const { get } = UI;

export const Docs = styled.div`
  font-size: ${get`docs.body.size`}px;
  line-height: ${get`docs.body.height`}px;
  padding: ${get`docs.padding`}px;
  font-family: ${get`docs.body.family`};

  strong,
  b {
    font-weight: ${get`docs.body.weight`};
  }

  p {
    font-family: ${get`docs.body.family`};
    font-size: ${get`docs.body.size`}px;
    line-height: ${get`docs.body.height`}px;
  }

  h1 {
    font-size: ${get`docs.h1.size`}px;
    line-height: ${get`docs.h1.height`}px;
  }
  h2 {
    font-size: ${get`docs.h2.size`}px;
    line-height: ${get`docs.h2.height`}px;
  }
  h3 {
    font-size: ${get`docs.h3.size`}px;
    line-height: ${get`docs.h3.height`}px;
  }
  h4 {
    font-size: ${get`docs.h4.size`}px;
    font-weight: ${get`docs.h4.weight`};
  }
  h5 {
    font-size: ${get`docs.h5.size`}px;
    font-weight: ${get`docs.h5.weight`};
  }
  h6 {
    font-size: ${get`docs.h6.size`}px;
    font-weight: ${get`docs.h6.weight`};
  }

  ul {
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
  }

  ul > li:before {
    content: "·";
    width: 18px;
    height: ${get`docs.body.height`}px;
    font-size: ${get`docs.body.height`}px;
    line-height: ${get`docs.body.height`}px;
    display: flex;
    float: left;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  ol {
    list-style-type: decimal;
    list-style-position: inside;
    margin: 0;
    padding: 0;
  }

  hr {
    margin: 0 auto;
    margin-top: ${get`docs.spacing.normal`}px;
    margin-bottom: ${get`docs.spacing.normal`}px;
    border: none;
    width: 25%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  pre {
    max-width: 100%;
  }

  pre {
    code {
      padding: ${get`docs.spacing.normal`}px;
      max-width: 100%;
      overflow: auto;
      display: block;
    }
  }

  code {
    font-family: ${get`docs.code.family`};
    font-weight: ${get`docs.code.weight`};
    font-size: ${get`docs.code.size`}px;
    padding: 1px;
    position: relative;
    border-radius: ${get`docs.radius.small`}px;
    background: ${get`docs.code.background`};
    color: ${get`docs.code.color`};
  }

  blockquote {
    padding: ${get`docs.spacing.small`}px;
    margin: ${get`docs.spacing.small`}px;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }

  & > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: ${get`docs.spacing.small`}px;
    margin-bottom: ${get`docs.spacing.small`}px;
  }

  em,
  i {
    font-style: italic;
  }

  a {
    color: ${get`docs.link.normal.color`};
  }

  a:hover {
    color: ${get`docs.link.hover.color`};
  }
`;
