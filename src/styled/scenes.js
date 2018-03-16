import styled from "styled-components";

export const ScenesContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  * {
    box-sizing: border-box;
  }
`;

export const PickerWrapper = styled.div`
  ${p => p.ui == false && `display:none`};
  width: ${p => p.size}px;
  height: 100vh;
  overflow: auto;
`;

export const UIToggle = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 9999;
  background: #fff;
  cursor: pointer;
  position: fixed;
  bottom: 16px;
  left: 16px;
  border-radius: 2px;
`;

export const SceneWrapper = styled.div`
  ${p => (p.ui ? `width: calc(100vw -  ${p.size}px)` : `width: 100%`)};
  height: 100vh;
  position: relative;
`;
