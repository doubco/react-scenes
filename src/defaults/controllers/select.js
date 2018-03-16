import React, { Component } from "react";
import styled from "styled-components";

import is from "is";

const InputWrapper = styled.div`
  margin-bottom: 8px;
`;

const SelectWrapper = styled.div`
  border: 0;
  width: 100%;
  border-bottom: 1px solid;
  height: 32px;
  position: relative;
`;

const Selected = styled.div`
  line-height: 32px;
  font-size: 14px;
`;

const Select = styled.select`
  border: 0;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  position: absolute;
  cursor: pointer;
  background: none;
`;

const SelectedTitle = styled.div`
  font-size: 8px;
  line-height: 32px;
  position: absolute;
  top: 0;
  right: 0;
`;

const InputTitle = styled.div`
  font-size: 10px;
`;

export default (initialValue, options) => {
  return {
    type: "select",
    initialValue,
    process: val => val,
    input: (value, set, title) => {
      let v = options.find(option => {
        return option.value == value;
      });

      return (
        <InputWrapper>
          <InputTitle>{title}</InputTitle>
          <SelectWrapper>
            <SelectedTitle>Select</SelectedTitle>
            <Selected>{v ? v.key : value}</Selected>
            <Select
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
