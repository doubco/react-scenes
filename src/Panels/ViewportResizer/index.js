import React, { Component, Fragment } from "react";

import {
  Resizer,
  ResizerDevicePickerInput,
  ResizerDevicePicker,
  ResizerInput,
  ResizerTitle,
  ResizerRange
} from "./styled";

class ViewportSizer extends Component {
  render() {
    const { config = {}, set, get, devices, ui } = this.props;
    const active = get("active");

    const device =
      config.viewport && devices.find(d => d.key == config.viewport.key);

    return (
      <Fragment>
        {config.resizer && ["controllers", "scenes"].includes(active.panel) ? (
          <Resizer {...ui}>
            <ResizerDevicePicker {...ui}>
              <ResizerTitle {...ui}>View</ResizerTitle>
              <ResizerDevicePickerInput {...ui}>
                {device ? device.title : "Custom"}
                <select
                  value={device ? device.key : "custom"}
                  onChange={e => {
                    let value = e.target.value;
                    if (value == "custom") {
                      set("config", {
                        viewport: { key: value, width: 100, height: 100 }
                      });
                    } else {
                      set("config", { viewport: { key: value } });
                    }
                  }}
                >
                  <option value="custom">Custom</option>
                  {devices.map(d => {
                    return (
                      <option key={d.key} value={d.key}>
                        {d.title}
                      </option>
                    );
                  })}
                </select>
              </ResizerDevicePickerInput>
            </ResizerDevicePicker>
            {config.viewport &&
              config.viewport.key == "custom" && (
                <Fragment>
                  <ResizerInput {...ui}>
                    <ResizerTitle {...ui}>Width</ResizerTitle>
                    <ResizerRange
                      {...ui}
                      max={100}
                      min={0}
                      step={1}
                      value={config.viewport.width}
                      onChange={e => {
                        set("config", {
                          viewport: {
                            ...config.viewport,
                            width: e.target.value
                          }
                        });
                      }}
                    />
                    <ResizerTitle {...ui}>
                      {config.viewport.width}%
                    </ResizerTitle>
                  </ResizerInput>
                  <ResizerInput>
                    <ResizerTitle {...ui}>Height</ResizerTitle>
                    <ResizerRange
                      {...ui}
                      max={100}
                      min={0}
                      step={1}
                      value={config.viewport.height}
                      onChange={e => {
                        set("config", {
                          viewport: {
                            ...config.viewport,
                            height: e.target.value
                          }
                        });
                      }}
                    />
                    <ResizerTitle {...ui}>
                      {config.viewport.height}%
                    </ResizerTitle>
                  </ResizerInput>
                </Fragment>
              )}
          </Resizer>
        ) : null}
      </Fragment>
    );
  }
}

export default ViewportSizer;
