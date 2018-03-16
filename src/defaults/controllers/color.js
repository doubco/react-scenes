import React, { Component } from "react";
import styled from "styled-components";
import { ChromePicker } from "react-color";

import onClickOutside from "react-onclickoutside";

const InputWrapper = styled.div`
  margin-bottom: 8px;
  position: relative;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid;
  height: 32px;
  width: 100%;
  font-size: 14px;
  background: none;
`;
const InputTitle = styled.div`
  font-size: 10px;
`;

const ColorInput = styled.div`
  position: absolute;
  top: 44px;
  width: 100%;
  left: 0;
  ${p => !p.visible && `display: none`};
  .chrome-picker {
    box-shadow: none !important;
  }
`;

const ColorPickerButton = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: ${p => p.color};
  bottom: 8px;
  right: 1px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.01);
`;

class ColorPicker extends Component {
  handleClickOutside() {
    this.props.setState({ visible: false });
  }
  render() {
    return (
      <ColorInput visible={this.props.state.visible}>
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
    input: (value, set, title, state, setState) => {
      return (
        <InputWrapper>
          <InputTitle>{title}</InputTitle>
          <Input
            type="text"
            value={value}
            onChange={e => set(e.target.value)}
            onFocus={() => {
              setState({ visible: !state.visible });
            }}
          />

          <ColorPickerButton
            color={value}
            onClick={() => {
              setState({ visible: !state.visible });
            }}
          />

          <ColorPickerComponent
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
