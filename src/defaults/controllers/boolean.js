import React, { Component } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 8px;
`;
const Input = styled.div`
  border: 0;
  border-bottom: 1px solid;
  height: 32px;
  width: 100%;
  font-size: 14px;
  line-height: 32px;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const InputTitle = styled.div`
  font-size: 10px;
`;

export default (initialValue, cycleNull) => {
  return {
    type: "boolean",
    initialValue,
    process: val => val,
    input: (value, set, title) => {
      return (
        <InputWrapper>
          <InputTitle>{title}</InputTitle>
          <Input
            onClick={e => {
              if (cycleNull) {
                set(value == true ? false : value == false ? null : true);
              } else {
                set(!value);
              }
            }}
          >
            {value == true ? "true" : value == false ? "false" : "null"}
          </Input>
        </InputWrapper>
      );
    }
  };
};
