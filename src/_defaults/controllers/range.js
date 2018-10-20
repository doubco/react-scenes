import React, { Component } from "react";

import { InputWrapper, InputTitle, Range } from "./styled";

export default (initialValue, min, max, step) => {
  return {
    type: "integer",
    initialValue,
    process: val => parseInt(String("0" + val).replace(/[^0-9.]/g, "")),
    input: ({ value, set, title, ui }) => {
      return (
        <InputWrapper>
          <InputTitle>
            {title} ({value})
          </InputTitle>
          <Range
            max={max}
            min={min}
            step={step}
            value={value}
            onChange={e => set(e.target.value)}
          />
        </InputWrapper>
      );
    }
  };
};
