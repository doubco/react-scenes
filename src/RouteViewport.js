import React, { Component } from "react";
import is from "./helpers/is";

import { devices } from "./defaults/devices";

import {
  FrameContainer,
  FrameWrapper,
  TargetWrapper,
  ViewportSize
} from "./styled/viewport";

/*globals
setTimeout
clearTimeout
window
document
*/

class Viewport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      width: 0,
      height: 0,
      isSizeVisible: false
    };

    this.onResize = this.onResize.bind(this);
  }

  hasChanges(nextProps, nextState) {
    const config =
      JSON.stringify(nextProps.config) != JSON.stringify(this.props.config);
    const props =
      JSON.stringify(nextProps.targetProps) !=
      JSON.stringify(this.props.targetProps);
    const centered = nextProps.centered != this.props.centered;
    const ready = nextState.ready != this.state.ready;
    const width = nextState.width != this.state.width;
    const height = nextState.height != this.state.height;
    const isSizeVisible = nextState.isSizeVisible != this.state.isSizeVisible;

    return (
      config || props || ready || centered || width || height || isSizeVisible
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    let changed = false;
    if (this.hasChanges(nextProps, nextState)) {
      changed = true;
    }
    return changed;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ ready: true }, () => {
        this.onResize();
      });
    }, 50);
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.onResize);
    }
  }

  componentWillUnmount() {
    clearTimeout("viewportSize");
  }

  onResize() {
    const { _id } = this.props;
    if (typeof window !== "undefined") {
      const viewport = document.getElementById(`scenes-viewport-${_id}`);

      if (viewport) {
        const rect = viewport.getBoundingClientRect();
        this.setState(
          {
            width: rect.width,
            height: rect.height,
            isSizeVisible: true
          },
          () => {
            if (this.state.isSizeVisible) {
              clearTimeout("viewportSize");
              setTimeout(
                () => {
                  this.setState({ isSizeVisible: false });
                },
                3000,
                "viewportSize"
              );
            }
          }
        );
      }
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize);
    }
  }

  devices() {
    let allDevices = { ...devices };

    if (this.props.devices) {
      allDevices = { ...allDevices, ...this.props.devices };
    }

    return allDevices;
  }

  render() {
    const { ready, width, height, isSizeVisible } = this.state;

    const { config, centered, _id } = this.props;

    const allDevices = this.devices();

    return (
      <FrameContainer
        ready={ready}
        device={config.device}
        devices={allDevices}
        id={`scenes-viewport-${_id}`}
      >
        <TargetWrapper>{this.props.children}</TargetWrapper>
        <ViewportSize visible={isSizeVisible}>
          {width}x{height}
        </ViewportSize>
      </FrameContainer>
    );
  }
}

export default Viewport;
