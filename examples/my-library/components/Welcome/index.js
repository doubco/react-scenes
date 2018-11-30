import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div.attrs(p => ({
  style: { backgroundColor: p.disabled ? "#ccc" : p.color }
}))`
  font-family: sans-serif;
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  min-width: 128px;
  padding: 8px;
  height: ${p => (p.size == "big" ? 48 : 32)}px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
  transition: 0.2s;
  &:hover {
    box-shadow: ${p => !p.disabled && " 0px 8px 8px rgba(0, 0, 0, 0.1)"};
  }
  &:active {
    box-shadow: ${p => !p.disabled && " 0px 2px 2px rgba(0, 0, 0, 0.1)"};
  }
`;

const Button = ({ title = "Button", color = "#5DAEF2", ...rest }) => {
  return (
    <ButtonWrapper color={color} {...rest}>
      {title}
    </ButtonWrapper>
  );
};

Button.displayName = "Button";

export default Button;
