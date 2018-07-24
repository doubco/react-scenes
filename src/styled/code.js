import styled from "styled-components";

export const CodeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  padding: 8px;
  & > pre {
    height: 100%;
    margin: 0 !important;
    background: none !important;
    * {
      background: none !important;
    }
    & > code {
      font-size: 12px;
    }
  }
`;

export const CopyButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  line-height: 14px;
  font-size: 13px;
  padding: 8px;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.5s;
  font-family: monospace;
  &:active {
    background: rgba(0, 0, 0, 0.05);
  }

  ${p => (p.copied ? `background: black` : `background: rgba(0, 0, 0, 0.02)`)};

  ${p => (p.copied ? `color: white` : `color: rgba(0, 0, 0, 0.2)`)};
`;
