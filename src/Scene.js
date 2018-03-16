import React, { Component } from "react";

import Panel from "./Panel";
import Viewport from "./Viewport";

import stringify from "./helpers/stringify";
import { Store } from "./helpers/store";

import { SceneContainer, PanelWrapper, ViewportWrapper } from "./styled/scene";

/*globals 
setTimeout
clearTimeout
*/

const defaultOptions = { theme: "light" };

class Scene extends Component {
  constructor(props) {
    super(props);

    const { controllers, options, config, _id } = this.props;

    const initialValues = this.getInitialValues();

    let globalOptions = Store.get("options") || {};

    let storedOptions =
      globalOptions && globalOptions[_id]
        ? globalOptions[_id]
        : options || defaultOptions;

    this.state = {
      size: 240,
      options: storedOptions || {},
      config: config,
      ready: false,
      events: [],
      props: initialValues
    };

    this.set = this.set.bind(this);
    this.setOptions = this.setOptions.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  getInitialValues() {
    const { controllers } = this.props;
    let initialValues = {};

    if (controllers) {
      controllers.forEach(({ controller, key }) => {
        initialValues[key] = controller.process(controller.initialValue);
      });
    }

    return initialValues;
  }

  componentDidMount() {
    const { _id } = this.props;

    if (this.state.config.caching) {
      let cache = Store.get("scenes");

      if (cache && cache[_id]) {
        this.setState({ props: cache[_id] });
      }
    }

    let storedOptions = Store.get("options") || defaultOptions;

    if (storedOptions[_id]) {
      this.setState({ options: storedOptions[_id] });
    }

    this.setState({ ready: true });
  }

  componentWillUnmount() {
    this.clearTimers();
  }

  setTimer(callback, d, key) {
    if (!this.timer) this.timer = {};
    this.timer[key] = setTimeout(() => {
      callback();
    }, d);
  }

  clearTimer(key) {
    if (!this.timer) this.timer = {};
    clearTimeout(this.timer[key]);
  }

  clearTimers() {
    if (this.timer) {
      Object.keys(this.timer).forEach(key => {
        clearTimeout(this.timer[key]);
      });
    }
  }

  targetProps() {
    const { controllers, events = [] } = this.props;

    let props = { ...this.state.props };

    events.forEach(key => {
      props[key] = e => {
        function simpleKeys(original) {
          return Object.keys(original).reduce(function(obj, key) {
            obj[key] =
              typeof original[key] === "object" ? "{ ... }" : original[key];
            return obj;
          }, {});
        }
        let event = {
          key,
          args: JSON.stringify(simpleKeys(e), null, 2),
          date: stringify(new Date())
        };

        this.setState({ events: [...this.state.events, event] });
      };
    });

    return props;
  }

  set(key, value, controller) {
    let props = { ...this.state.props };

    props[key] = controller.process(value);

    const scenes = Store.get("scenes") || {};
    const scene = this.props._id;

    Store.set({
      scenes: { ...scenes, [scene]: { ...props, [key]: value } }
    });

    this.setState({ props });
  }

  events() {
    return this.state.events;
  }

  setOptions(options) {
    const { _id } = this.props;
    this.setState({ options });
    let oldOptions = Store.get("options");
    Store.set({ options: { ...oldOptions, [_id]: options } });
  }

  reset() {
    const initialValues = this.getInitialValues();
    const { _id } = this.props;

    this.setState({ ready: false, props: initialValues });

    let oldOptions = Store.get("options") || {};

    if (oldOptions[_id]) {
      delete oldOptions[_id];
      Store.set({ options: oldOptions });
    }

    setTimeout(() => {
      this.setState({
        ready: true,
        options: this.props.options || defaultOptions
      });
    }, 100);
  }

  render() {
    const { config, frame, panels, _id } = this.props;
    const { size, options, ready } = this.state;

    const targetProps = this.targetProps();
    const events = this.events();

    const set = this.set;
    const setOptions = this.setOptions;
    const setTimer = this.setTimer;
    const clearTimer = this.clearTimer;
    const reset = this.reset;

    return ready ? (
      <SceneContainer theme={options.theme} position={config.panel.position}>
        <PanelWrapper
          ui={config.ui}
          position={config.panel.position}
          options={options}
          size={size}
        >
          <Panel
            {...this.props}
            targetProps={targetProps}
            set={set}
            events={events}
            setOptions={setOptions}
            options={options}
            reset={reset}
            panels={panels}
          />
        </PanelWrapper>

        <ViewportWrapper
          position={config.panel.position}
          device={config.device}
          size={size}
          ui={config.ui}
        >
          <Viewport
            key={`viewport-${_id}`}
            {...this.props}
            centered={options.centered}
            targetProps={targetProps}
            setOptions={setOptions}
            setTimer={setTimer}
            clearTimer={clearTimer}
            frame={frame}
            timer={this.timer}
          />
        </ViewportWrapper>
      </SceneContainer>
    ) : null;
  }
}

export default Scene;
