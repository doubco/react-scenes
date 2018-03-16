import React, { Component } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 8px;
`;
const Input = styled.input`
  border: 0;
  width: 100%;
  border-bottom: 1px solid;
  height: 32px;
  -webkit-appearance: none;
  vertical-align: middle;
  outline: none;
  border: none;
  padding: 0;
  background: none;

  &::-webkit-slider-runnable-track {
    background-color: rgba(0, 0, 0, 0.1);
    height: 4px;
    border-radius: 2px;
    border: 1px solid transparent;
  }

  &[disabled]::-webkit-slider-runnable-track {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: transparent;
    opacity: 0.4;
  }

  &::-moz-range-track {
    background-color: rgba(0, 0, 0, 0.1);
    height: 4px;
    border-radius: 2px;
    border: none;
  }

  &::-ms-track {
    color: transparent;
    border: none;
    background: none;
    height: 4px;
  }

  &::-ms-fill-lower {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  &::-ms-fill-upper {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  &::-ms-tooltip {
    display: none;
  }

  &::-moz-range-thumb {
    border-radius: 20px;
    height: 16px;
    width: 16px;
    border: none;
    background: none;
    background-color: black;
  }

  &:active::-moz-range-thumb {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    border-radius: 100%;
    background-color: black;
    height: 16px;
    width: 16px;
    margin-top: -7px;
  }

  &[disabled]::-webkit-slider-thumb {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:active::-webkit-slider-thumb {
    outline: none;
  }

  &::-ms-thumb {
    border-radius: 100%;
    background-color: black;
    height: 16px;
    width: 16px;
    border: none;
  }

  &:active::-ms-thumb {
    border: none;
  }
`;

const InputTitle = styled.div`
  font-size: 10px;
`;

export default (initialValue, max, min, step) => {
  return {
    type: "integer",
    initialValue,
    process: val => parseInt(String("0" + val).replace(/[^0-9.]/g, "")),
    input: (value, set, title) => {
      return (
        <InputWrapper>
          <InputTitle>
            {title} ({value})
          </InputTitle>
          <Input
            type="range"
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
