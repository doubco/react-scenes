import { Component } from "react";

function isStateless(Component) {
  if (!Component) return false;
  if (!Component.prototype) return false;
  return !Component.prototype.render;
}

const Wrapper = (target, targetProps) => {
  return class Target extends Component {
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

    render() {
      const state = this.state.states;
      return target({
        props: targetProps,
        setState: this.setTargetState,
        state
      });
    }
  };
};

export default (
  target,
  { setViewportState, getViewportState, targetProps }
) => {
  let Target;

  if (isStateless(target)) {
    Target = Wrapper(target, targetProps);
  } else {
    Target = target;
  }

  return class Synchronizer extends Target {
    constructor(props) {
      super(props);

      this.state = { ...this.state, ...getViewportState() };
      // setViewportState(this.state);
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
