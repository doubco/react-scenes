import React, { Component } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 8px;
`;
const Input = styled.input`
  border: 0;
  width: 100%;
  border-bottom: 1px solid;
  height: 32px;
  font-size: 14px;
  background: none;
`;
const InputTitle = styled.div`
  font-size: 10px;
`;

export default initialValue => {
  return {
    type: "integer",
    initialValue,
    process: val => parseInt(String("0" + val).replace(/[^0-9.]/g, "")),
    input: (value, set, title) => {
      return (
        <InputWrapper>
          <InputTitle>{title}</InputTitle>
          <Input
            type="number"
            value={value}
            onChange={e => set(e.target.value)}
          />
        </InputWrapper>
      );
    }
  };
};
