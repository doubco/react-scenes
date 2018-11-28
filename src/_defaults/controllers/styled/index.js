import styled from "styled-components";

import UI from "../../../theme";
const { cond, get, size, variant } = UI;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  background: ${variant.light};
  padding: ${size`input:padding|px`};
  border-bottom: 1px solid ${variant.transparentize(0.9, null, "contrast")};
`;

export const InputTitle = styled.div`
  font-size: ${size`input:title.size|px`};
  line-height: ${size`input:title.height|px`};
  height: ${size`input:title.height|px`};
  margin-bottom: calc(${size`input:padding|px`} / 2);
  opacity: 0.6;
`;

export const SmallInputWrapper = styled(InputWrapper)`
  width: 50%;
`;

export const Textarea = styled.textarea.attrs(p => ({
  placeholder: "Type something."
}))`
  border: 0;
  width: 100%;
  font-size: ${size`input:value.size|px`};
  font-weight: 600;
  height: calc(${size`input:value.height|px`} * 4);
  background: none;
  resize: vertical;
`;

export const Input = styled.div`
  border: 0;
  font-weight: 600;
  width: 100%;
  height: ${size`input:value.height|px`};
  line-height: ${size`input:value.height|px`};
  font-size: ${size`input:value.size|px`};

  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const SelectWrapper = styled.div`
  border: 0;
  width: 100%;
  height: ${size`input:value.height|px`};
  line-height: ${size`input:value.height|px`};
  font-size: ${size`input:value.size|px`};
  font-weight: 600;
  position: relative;
`;

export const Selected = styled.div``;

export const Select = styled.select`
  border: 0;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  position: absolute;
  cursor: pointer;
  background: none;
`;

export const SelectedTitle = styled.div`
  font-size: ${size`input:title.size|px`};
  position: absolute;
  top: 0;
  right: 0;
  text-transform: uppercase;
  opacity: 0.6;
`;

export const ColorInput = styled.div`
  position: absolute;
  top: calc(
    ${size`input:title.height|px`} + ${size`input:padding|px`} * 2 +
      ${size`input:value.height|px`}
  );
  width: 100%;
  left: 0;
  z-index: 99;
  ${p => !p.visible && `display: none`};
  .chrome-picker {
    margin-left: ${size`input:padding|px`};
    width: calc(100% - ${size`input:padding|px`}*2) !important;
  }
`;

export const ColorPickerButton = styled.div`
  position: absolute;
  width: ${size`input:value.height|px`};
  height: ${size`input:value.height|px`};
  border-radius: ${size`input:value.height|px`};
  background: ${p => p.color};
  bottom: ${size`input:padding|px`};
  right: ${size`input:padding|px`};

  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.01);
`;

export const TextInput = styled.input.attrs(p => ({
  type: p.type || "text",
  placeholder: "Type something."
}))`
  display: block;
  border: 0;
  font-weight: 600;
  width: 100%;
  background: none;
  padding: 0;
  margin: 0;
  height: ${size`input:value.height|px`};
  line-height: ${size`input:value.height|px`};
  font-size: ${size`input:value.size|px`};
`;

export const Range = styled.input.attrs(p => ({ type: "range" }))`
  border: 0;
  width: 100%;
  margin: 0;
  display: block;
  border-bottom: 1px solid;
  height: ${size`input:value.height|px`};
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
