import styled from "styled-components";

export const SizerContainer = styled.div`
  width: 100%;
  height: 32px;
  font-size: 12px;
  line-height: 16px;
  background: rgba(0, 0, 0, 0.05);
  padding: 8px;
  font-family: Source Code Pro, Monaco, monospace;
  ${p => !p.visible && `display: none`};
`;

export const Selected = styled.div`
  line-height: 16px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SelectWrapper = styled.div`
  width: 112px;
  height: 16px;
  float: left;
  cursor: pointer;
  position: relative;
  select {
    border: 0;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0;
    position: absolute;
    cursor: pointer;
    background: none;
  }
`;

export const SizeInput = styled.input`
  width: 56px;
  float: left;
  background: none;
  margin: 0;
  border: none;
  text-align: center;
  font-family: Source Code Pro, Monaco, monospace;
`;
