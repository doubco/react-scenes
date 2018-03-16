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
    input: (value, set, title) => {
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
        <InputWrapper>
          <InputTitle>
            {title}({isArray ? "valid" : "invalid"})
          </InputTitle>
          <Textarea value={pretty} onChange={e => set(e.target.value)} />
        </InputWrapper>
      );
    }
  };
};
