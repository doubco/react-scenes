import React, { Component } from "react";

import { InputWrapper, InputTitle, TextInput } from "./styled";

export default initialValue => {
  return {
    type: "text",
    initialValue,
    process: val => val,
    input: ({ value, set, title, ui }) => {
      return (
        <InputWrapper {...ui}>
          <InputTitle {...ui}>{title}</InputTitle>
          <TextInput
            {...ui}
            type="text"
            value={value}
            onChange={e => set(e.target.value)}
          />
        </InputWrapper>
      );
    }
  };
};
