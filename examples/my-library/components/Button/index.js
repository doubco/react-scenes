import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div.attrs(p => ({
  style: { backgroundColor: p.color }
}))`
  font-family: sans-serif;
  cursor: pointer;
  min-width: 128px;
  padding: 8px;
  height: 32px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
  transition: 0.2s;
  &:hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  }
  &:active {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  }
`;

const Button = ({ title = "Button", color = "#5DAEF2" }) => {
  return <ButtonWrapper color={color}>{title}</ButtonWrapper>;
};

Button.displayName = "Button";

export default Button;
