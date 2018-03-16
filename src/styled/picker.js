import styled from "styled-components";

export const PickerContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  font-family: Source Code Pro, Monaco, monospace;
`;

export const TreeWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  ${p =>
    p.sizer ? `height: calc(100vh - 96px)` : `height: calc(100vh - 64px)`};
  overflow: auto;
`;

export const PickerTitle = styled.div`
  width: 100%;
  height: 32px;
  font-size: 14px;
  line-height: 16px;
  background: rgba(0, 0, 0, 0.05);
  padding: 8px;
`;

export const TreeNode = styled.div`
  height: 32px;
  font-size: 14px;
  line-height: 16px;
  padding: 8px;

  margin-left: 16px;
  float: left;
  width: calc(100% - 16px);
  cursor: pointer;
  ${p => p.active && `font-weight: 600`};
`;

export const TreeNodeBullet = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 2px 0 2px 3px;
  border-color: transparent transparent transparent #000000;
`;

export const TreeNodeTitle = styled.div`
  width: 100%;
  height: 32px;
  font-size: 14px;
  line-height: 16px;
  padding: 8px;
  float: left;
  cursor: pointer;
  ${p => (p.collapsed ? `opacity: 1` : `opacity: 0.4`)};

  ${TreeNodeBullet} {
    ${p => !p.collapsed && `transform: rotate(90deg)`};
  }
`;

export const TreeNodes = styled.div`
  width: calc(100% - 16px);
  font-size: 14px;
  line-height: 16px;
  margin-left: 8px;
  margin-right: 8px;
  float: left;
`;
