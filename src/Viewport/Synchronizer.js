import React, { Component } from "react";

class TargetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: {}
    };

    this.setTargetState = this.setTargetState.bind(this);
  }

  setTargetState(ns) {
    this.setState({ states: { ...this.state.states, ...ns } });
  }

  get isStateless() {
    return !(
      this.target &&
      this.target.prototype &&
      this.target.prototype.render
    );
  }

  render() {
    const state = this.state.states;
    if (this.isStateless) {
      return this.target({
        props: this.targetProps,
        setState: this.setTargetState,
        pushEvent: this.pushEvent,
        state
      });
    } else {
      const Target = this.target;
      return <Target {...this.targetProps} />;
    }
  }
}

export default (
  target,
  { setViewportState, getViewportState, targetProps, pushEvent }
) => {
  return class Synchronizer extends TargetComponent {
    constructor(props) {
      super(props);
      this.target = target;
      this.targetProps = targetProps;
      this.pushEvent = pushEvent;
      this.state = { ...this.state, ...getViewportState() };
    }

    componentDidMount() {
      if (this.componentWillReceiveProps) {
        this.componentWillReceiveProps(targetProps, this.state);
      }
      if (super.componentDidMount) {
        super.componentDidMount();
      }
    }

    componentWillUpdate(nextProps, nextState) {
      if (super.componentWillUpdate) {
        super.componentWillUpdate(nextProps, nextState);
      }
      setViewportState(nextState);
    }
  };
};
