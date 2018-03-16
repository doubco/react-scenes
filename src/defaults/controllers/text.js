import React, { Component } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 8px;
`;
const Input = styled.input`
  border: 0;
  border-bottom: 1px solid;
  height: 32px;
  width: 100%;
  font-size: 14px;
  background: none;
`;
const InputTitle = styled.div`
  font-size: 10px;
`;

export default initialValue => {
  return {
    type: "text",
    initialValue,
    process: val => val,
    input: (value, set, title) => {
      return (
        <InputWrapper>
          <InputTitle>{title}</InputTitle>
          <Input
            type="text"
            value={value}
            onChange={e => set(e.target.value)}
          />
        </InputWrapper>
      );
    }
  };
};
