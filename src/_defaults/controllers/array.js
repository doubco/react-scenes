import React, { Component } from "react";

import is from "wtf-is-this";
import stringify from "../../utils/stringify";

import { InputWrapper, InputTitle, Textarea } from "./styled";

export default initialValue => {
  return {
    type: "array",
    initialValue,
    process: val => {
      let json = val;
      try {
        json = JSON.parse(val);
      } catch (e) {
        json = val;
      }
      json = JSON.parse(JSON.stringify(json));

      return json;
    },
    input: ({ value, set, title, ui }) => {
      let array = value;
      let isArray;

      if (is.array(value)) {
        isArray = true;
      } else {
        try {
          array = JSON.parse(value);
        } catch (e) {
          array = value;
        }

        try {
          isArray = JSON.parse(value);
        } catch (e) {
          isArray = false;
        }
      }

      var pretty = isArray ? JSON.stringify(array, undefined, 1) : value;

      return (
        <InputWrapper {...ui}>
          <InputTitle {...ui}>
            {title}({isArray ? "valid" : "invalid"})
          </InputTitle>
          <Textarea
            value={pretty}
            onChange={e => set(e.target.value)}
            {...ui}
          />
        </InputWrapper>
      );
    }
  };
};
