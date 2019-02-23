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

class ColorPicker extends Component {
  handleClickOutside() {
    this.props.setState({ visible: false });
  }
  render() {
    return (
      <ColorInput visible={this.props.state.visible == this.props.title}>
        <ChromePicker {...this.props} />
      </ColorInput>
    );
  }
}

const ColorPickerComponent = onClickOutside(ColorPicker);

export default (initialValue, type = "rgba") => {
  return {
    type: "color",
    initialValue,
    process: val => val,
    input: ({ value, set, title, state, setState, ui }) => {
      return (
        <InputWrapper {...ui}>
          <InputTitle {...ui}>{title}</InputTitle>
          <TextInput
            {...ui}
            value={value}
            onChange={e => set(e.target.value)}
            onFocus={() => {
              setState({ visible: title != state.visible ? title : title });
            }}
          />

          <ColorPickerButton
            {...ui}
            color={value}
            onClick={() => {
              setState({ visible: title == state.visible ? false : title });
            }}
          />

          <ColorPickerComponent
            title={title}
            ui={ui}
            state={state}
            setState={setState}
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
        </InputWrapper>
      );
    }
  };
};
