import React, { Component } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 8px;
`;
const Textarea = styled.textarea`
  border: 0;
  width: 100%;
  border-bottom: 1px solid;
  font-size: 14px;
  height: 96px;
  background: none;
`;
const InputTitle = styled.div`
  font-size: 10px;
`;

export default initialValue => {
  return {
    type: "textarea",
    initialValue,
    process: val => val,
    input: (value, set, title) => {
      return (
        <InputWrapper>
          <InputTitle>{title}</InputTitle>
          <Textarea value={value} onChange={e => set(e.target.value)} />
        </InputWrapper>
      );
    }
  };
};
