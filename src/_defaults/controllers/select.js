import React, { Component } from "react";

import is from "wtf-is-this";

import {
  InputWrapper,
  InputTitle,
  SelectWrapper,
  Selected,
  Select,
  SelectedTitle
} from "./styled";

export default (initialValue, options) => {
  return {
    type: "select",
    initialValue,
    process: val => val,
    input: ({ value, set, title, ui }) => {
      let v = options.find(option => {
        return option.value == value;
      });

      return (
        <InputWrapper {...ui}>
          <InputTitle {...ui}>{title}</InputTitle>
          <SelectWrapper {...ui}>
            <SelectedTitle {...ui}>Select</SelectedTitle>
            <Selected {...ui}>{v ? v.key : value}</Selected>
            <Select
              {...ui}
              value={value}
              options={options}
              onChange={e => set(e.target.value)}
            >
              {options.map((option, idx) => (
                <option
                  key={idx}
                  value={is.object(option) ? option.value : option}
                >
                  {is.object(option) ? option.key : option}
                </option>
              ))}
            </Select>
          </SelectWrapper>
        </InputWrapper>
      );
    }
  };
};
