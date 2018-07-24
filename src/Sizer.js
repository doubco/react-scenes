import React, { Component } from "react";
import is from "./helpers/is";
import { Store } from "./helpers/store";

import {
  SizerContainer,
  SelectWrapper,
  Selected,
  SizeInput
} from "./styled/sizer";

import { devices } from "./defaults/devices";

class Sizer extends Component {
  devices() {
    let allDevices = { ...devices };

    if (this.props.devices) {
      allDevices = { ...allDevices, ...this.props.devices };
    }

    return allDevices;
  }

  render() {
    const { config, setConfig } = this.props;

    const allDevices = this.devices();
    let active;

    if (is.object(config.device)) {
      active = "custom";
    }

    if (is.string(config.device)) {
      active = config.device;
    }
    // console.log(allDevices, active);

    return (
      <SizerContainer visible={config.sizer}>
        <SelectWrapper>
          <Selected>
            {active
              ? active == "custom" ? "Custom" : allDevices[active].title
              : "Default"}
          </Selected>
          <select
            value={active}
            onChange={e => {
              let device =
                e.target.value && e.target.value.length > 0
                  ? e.target.value
                  : null;

              if (device == "custom") {
                device = {
                  title: "Custom",
                  width: 320,
                  height: 320
                };
              }

              setConfig({ device });
            }}
          >
            <option value="">Default</option>
            <option value={"custom"}>Custom</option>
            {Object.keys(allDevices).map((key, idx) => {
              return (
                <option key={idx} value={key}>
                  {allDevices[key].title}
                </option>
              );
            })}
          </select>
        </SelectWrapper>
        <SizeInput
          onChange={e => {
            let value = e.target.value;
            value = value.replace(/[^0-9]/, "");

            let device = {};
            if (is.object(config.device)) {
              device = { ...config.device };
            } else if (is.string(config.device)) {
              device = { ...allDevices[active] };
            }

            device.width = value;

            setConfig({ device });
          }}
          value={
            active
              ? active == "custom"
                ? config.device.width
                : allDevices[active].width
              : "100%"
          }
          disabled={!active}
          type={!active ? "text" : "number"}
        />
        <SizeInput
          onChange={e => {
            let value = e.target.value;
            value = value.replace(/[^0-9]/, "");

            let device = {};
            if (is.object(config.device)) {
              device = { ...config.device };
            } else if (is.string(config.device)) {
              device = { ...allDevices[active] };
            }

            device.height = value;

            setConfig({ device });
          }}
          value={
            active
              ? active == "custom"
                ? config.device.height
                : allDevices[active].height
              : "100%"
          }
          disabled={!active}
          type={!active ? "text" : "number"}
        />
      </SizerContainer>
    );
  }
}

export default Sizer;
