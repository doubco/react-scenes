import React, { Component } from "react";

import { InputWrapper, InputTitle, Textarea } from "./styled";

export default initialValue => {
  return {
    type: "textarea",
    initialValue,
    process: val => val,
    input: ({ value, set, title, ui }) => {
      return (
        <InputWrapper {...ui}>
          <InputTitle {...ui}>{title}</InputTitle>
          <Textarea {...ui} value={value} onChange={e => set(e.target.value)} />
        </InputWrapper>
      );
    }
  };
};
