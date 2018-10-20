import styled from "styled-components";

import UI from "../../../theme";

const { cond, is, get, variant, size, userSelect } = UI;

export const ResizerRange = styled.input.attrs({
  type: "range"
})`
  border: 0;
  margin-left: ${size`input.margin|px`};
  margin-right: ${size`input.margin|px`};
  width: calc(100% - ${size`input.margin|px`} * 2);
  border-bottom: 1px solid;
  height: 100%;
  -webkit-appearance: none;
  vertical-align: middle;
  outline: none;
  border: none;
  padding: 0;
  background: none;

  &::-webkit-slider-runnable-track {
    background-color: ${variant.transparentize(0.9, null, "contrast")};
    height: 4px;
    border-radius: 2px;
    border: 1px solid transparent;
  }

  &[disabled]::-webkit-slider-runnable-track {
    border: 1px solid ${variant.transparentize(0.9, null, "contrast")};
    background-color: transparent;
    opacity: 0.4;
  }

  &::-moz-range-track {
    background-color: ${variant.transparentize(0.9, null, "contrast")};
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
    background-color: ${variant.transparentize(0.9, null, "contrast")};
    border-radius: 2px;
  }

  &::-ms-fill-upper {
    background-color: ${variant.transparentize(0.9, null, "contrast")};
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
    background-color: ${variant.contrast};
  }

  &:active::-moz-range-thumb {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    border-radius: 100%;
    background-color: ${variant.contrast};
    height: 16px;
    width: 16px;
    margin-top: -7px;
  }

  &[disabled]::-webkit-slider-thumb {
    background-color: transparent;
    border: 1px solid ${variant.transparentize(0.9, null, "contrast")};
  }

  &:active::-webkit-slider-thumb {
    outline: none;
  }

  &::-ms-thumb {
    border-radius: 100%;
    background-color: ${variant.contrast};
    height: 16px;
    width: 16px;
    border: none;
  }

  &:active::-ms-thumb {
    border: none;
  }
`;

export const Resizer = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  border-top: 1px solid ${variant.transparentize(0.9, "black.main")};
`;
export const ResizerDevicePicker = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: ${size`input.height|px`};
`;
export const ResizerDevicePickerInput = styled.div`
  width: 100%;
  position: relative;
  border-radius: ${size`input.radius|px`};
  margin: ${size`input.margin|px`};
  background: ${variant.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${size`input:value.size|px`};
  select {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
export const ResizerInput = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${size`input.height|px`};
  width: 100%;
`;
export const ResizerTitle = styled.div`
  display: flex;
  align-items: center;
  padding: ${size`item.padding|px`};
  font-size: ${size`input:title.size|px`};
  min-width: 48px;
`;
