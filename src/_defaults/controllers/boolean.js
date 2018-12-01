import React, { Component } from "react";

import { InputWrapper, InputTitle, Input } from "./styled";

export default (initialValue, cycleNull) => {
  return {
    type: "boolean",
    initialValue,
    process: val => val,
    input: ({ value, set, title, ui }) => {
      return (
        <InputWrapper {...ui}>
          <InputTitle {...ui}>{title}</InputTitle>
          <Input
            {...ui}
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
