import styled from "styled-components";

export const DocsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  line-height: 16px;
  font-size: 14px;
  overflow: auto;
  flex-shirnk: 1;

  & > p {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  h1 {
    font-size: 32px;
    line-height: 48px;
  }
  h2 {
    font-size: 28px;
    line-height: 32px;
  }
  h3 {
    font-size: 24px;
    line-height: 32px;
  }
  h4 {
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
  }
  h5 {
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
  }
  h6 {
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;
  }
  ul {
    list-style-type: disc;
    list-style-position: inside;
  }
  ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
  hr {
    border: 1px solid black;
  }
  code {
    font-family: monospace;
  }

  & > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
