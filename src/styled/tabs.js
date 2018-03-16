import styled from "styled-components";

export const Tab = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  font-size: 14px;
  line-height: 14px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${p =>
    p.active ? `background: rgba(0,0,0,0.1)` : `background: rgba(0,0,0,0.05)`};

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Tabs = styled.div`
  min-width: 100%;
  height: 32px;
  display: flex;
  background: rgba(0, 0, 0, 0.05);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const TabsContainer = styled.div`
  width: 100%;
  height: calc(100% - 64px);
  display: flex;
`;
