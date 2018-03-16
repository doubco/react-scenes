import styled from "styled-components";

export const ControllersWrapper = styled.div`
  ${p => p.position == "bottom" && `width: 32%`};
  ${p => p.position == "top" && `width: 32%`};
  ${p => p.position == "left" && `width: 100%`};
  ${p => p.position == "right" && `width: 100%`};
  float: left;
`;

export const ControllersContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  overflow: auto;

  ${p => p.position == "right" && `float:left`};
  ${p => p.position == "left" && `float:left`};
  ${p =>
    p.position == "top" ||
    (p.position == "bottom" &&
      `
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
  `)};
`;
