import React, { Component } from "react";
import is from "is";

import Synchronizer from "./Synchronizer";
import Frame from "./Frame";

import { devices } from "./defaults/devices";

import {
  // ViewportContainer,
  // ViewportWrapper,
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
      targetState: {},
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

  setViewportState(targetState, callback) {
    this.setState({ targetState }, callback);
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

  onResize() {
    const { _id, clearTimer, setTimer } = this.props;
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
              clearTimer("viewportSize");
              setTimer(
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
    const { targetState, ready, width, height, isSizeVisible } = this.state;
    const {
      target,
      targetProps,
      config,
      frame,
      centered,
      _id,
      stylesheet,
      styleClassNames
    } = this.props;

    const Target = Synchronizer(target, {
      setViewportState: (...args) => this.setViewportState(...args),
      getViewportState: () => this.state.targetState,
      targetProps
    });

    const allDevices = this.devices();

    let frameProps = {};

    if (is.object(frame)) {
      frameProps = frame;
    }

    return (
      <FrameContainer
        ready={ready}
        device={config.device}
        devices={allDevices}
        id={`scenes-viewport-${_id}`}
      >
        <Frame
          {...frameProps}
          stylesheet={stylesheet}
          styleClassNames={styleClassNames}
        >
          <FrameWrapper centered={centered}>
            <TargetWrapper>
              <Target {...targetProps} />
            </TargetWrapper>
          </FrameWrapper>
        </Frame>
        <ViewportSize visible={isSizeVisible}>
          {width}x{height}
        </ViewportSize>
      </FrameContainer>
    );

    // return (
    //   <ViewportContainer
    //     ready={ready}
    //     device={config.device}
    //     devices={allDevices}
    //     id={`scenes-viewport-${_id}`}
    //   >
    //     <ViewportWrapper centered={centered}>
    //       <TargetWrapper>
    //         <Target {...targetProps} />
    //       </TargetWrapper>
    //       <ViewportSize visible={isSizeVisible}>
    //         {width}x{height}
    //       </ViewportSize>
    //     </ViewportWrapper>
    //   </ViewportContainer>
    // );
  }
}

export default Viewport;
