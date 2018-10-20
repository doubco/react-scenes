import React, { Component } from "react";

import { InputWrapper, InputTitle, TextInput } from "./styled";

export default initialValue => {
  return {
    type: "float",
    initialValue,
    process: val => parseFloat(String("0" + val).replace(/[^0-9.]/g, "")),
    input: ({ value, set, title, ui }) => {
      return (
        <InputWrapper {...ui}>
          <InputTitle {...ui}>{title}</InputTitle>
          <TextInput
            {...ui}
            type="number"
            value={value}
            onChange={e => set(e.target.value)}
          />
        </InputWrapper>
      );
    }
  };
};
