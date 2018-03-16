import React, { Component } from "react";
import styled from "styled-components";

import is from "is";

import stringify from "../../helpers/stringify";

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

      return json;
    },
    input: (value, set, title) => {
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
        <InputWrapper>
          <InputTitle>
            {title}({isObject ? "valid" : "invalid"})
          </InputTitle>
          <Textarea value={pretty} onChange={e => set(e.target.value)} />
        </InputWrapper>
      );
    }
  };
};
