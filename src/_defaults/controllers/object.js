import React, { Component } from "react";

import is from "wtf-is-this";

import { InputWrapper, InputTitle, Textarea } from "./styled";

export default initialValue => {
  return {
    type: "object",
    initialValue,
    process: val => {
      let json = val;
      try {
        json = JSON.parse(val);
      } catch (e) {
        json = val;
      }
      json = JSON.parse(JSON.stringify(json));

      if (is.object(json)) {
        return json;
      } else {
        return {};
      }
    },
    check: value => {
      return is.object(value) ? value : {};
    },
    input: ({ value, set, title, ui }) => {
      let array = value;
      let isObject;

      if (is.object(value)) {
        isObject = true;
      } else {
        try {
          array = JSON.parse(value);
        } catch (e) {
          array = value;
        }

        try {
          isObject = JSON.parse(value);
        } catch (e) {
          isObject = false;
        }
      }

      var pretty = isObject ? JSON.stringify(array, undefined, 1) : value;

      return (
        <InputWrapper {...ui}>
          <InputTitle {...ui}>
            {title}({isObject ? "valid" : "invalid"})
          </InputTitle>
          <Textarea
            {...ui}
            value={pretty}
            onChange={e => set(e.target.value)}
          />
        </InputWrapper>
      );
    }
  };
};
