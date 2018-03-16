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
`;
const InputTitle = styled.div`
  font-size: 10px;
`;

export default initialValue => {
  return {
    type: "boolean",
    initialValue,
    process: val => val,
    input: (value, set, title) => {
      return (
        <InputWrapper>
          <InputTitle>{title}</InputTitle>
          <Input type="text" onClick={e => set(!value)}>
            {value == true ? "true" : "false"}
          </Input>
        </InputWrapper>
      );
    }
  };
};
