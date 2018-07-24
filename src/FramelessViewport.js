import React, { Component } from "react";
import is from "./helpers/is";

import Synchronizer from "./Synchronizer";

import {
  ViewportContainer,
  ViewportWrapper,
  TargetWrapper
} from "./styled/viewport";

/*globals
setTimeout
*/

class Viewport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetState: {}
    };
  }

  hasChanges(nextProps, nextState) {
    const config =
      JSON.stringify(nextProps.config) != JSON.stringify(this.props.config);
    const props =
      JSON.stringify(nextProps.targetProps) !=
      JSON.stringify(this.props.targetProps);
    const centered = nextProps.centered != this.props.centered;

    return config || props || centered;
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

  render() {
    const { targetState } = this.state;
    const { target, targetProps, config, centered, _id } = this.props;

    const Target = Synchronizer(target, {
      setViewportState: (...args) => this.setViewportState(...args),
      getViewportState: () => this.state.targetState,
      targetProps
    });

    return (
      <ViewportContainer>
        <ViewportWrapper centered={centered}>
          <TargetWrapper>
            <Target {...targetProps} />
          </TargetWrapper>
        </ViewportWrapper>
      </ViewportContainer>
    );
  }
}

export default Viewport;
