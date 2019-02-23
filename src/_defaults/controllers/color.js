import React, { Component } from "react";
import { ChromePicker } from "react-color";

import onClickOutside from "react-onclickoutside";

import {
  ColorInput,
  InputWrapper,
  InputTitle,
  Input,
  ColorPickerButton,
  TextInput
} from "./styled";

export default (initialValue, type = "rgba") => {
  return {
    type: "color",
    initialValue,
    process: val => val,
    input: ({ value, set, title, state, setState, ui, type }) => {
      return (
        <InputWrapper {...ui}>
          <InputTitle {...ui}>{title}</InputTitle>
          <TextInput
            {...ui}
            value={value}
            onChange={e => set(e.target.value)}
            onClick={() => {
              setState({ visible: title });
            }}
            onBlur={() => {
              setState({ visible: false });
            }}
          />

          <ColorPickerButton
            {...ui}
            color={value}
            onClick={() => {
              setState({ visible: title == state.visible ? false : title });
            }}
          />

          <ColorInput visible={state.visible == title}>
            <ChromePicker
              {...this.props}
              color={value}
              onChange={({ hex, rgb }) => {
                let string = "";
                if (type == "rgba") {
                  string = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
                }
                if (type == "rgb") {
                  string = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
                }
                if (type == "hex") {
                  string = hex;
                }
                set(string);
              }}
            />
          </ColorInput>
        </InputWrapper>
      );
    }
  };
};
