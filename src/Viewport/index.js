import React, { Component } from "react";

import stringify from "../utils/stringify";
import Synchronizer from "./Synchronizer";
import { ViewportContainer, ViewportWrapper, TargetWrapper } from "./styled";

class Viewport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetState: {}
    };
  }

  setViewportState(targetState, callback) {
    this.setState({ targetState }, callback);
  }

  get initialProps() {
    const { scene, set, get } = this.props;
    const { controllers = [], events = [] } = scene;
    let initialValues = { ...scene.props };

    if (controllers.length) {
      controllers.forEach(({ controller, key }) => {
        let value = initialValues[key];
        if (value == undefined) {
          value = controller.initialValue;
        }
        if (controller.check) {
          initialValues[key] = controller.check(controller.process(value));
        } else {
          initialValues[key] = controller.process(value);
        }
      });
    }

    events.forEach(key => {
      initialValues[key] = (...args) => {
        this.pushEvent(key, [...args]);
      };
    });

    return initialValues;
  }

  pushEvent(key, args) {
    const { get, set, scene } = this.props;
    function simpleKeys(original) {
      return Object.keys(original).reduce(function(obj, key) {
        obj[key] =
          typeof original[key] === "object" ? "{ ... }" : original[key];
        return obj;
      }, {});
    }

    let event = {
      key,
      args: JSON.stringify(
        args.length == 1
          ? simpleKeys(args[0])
          : { ...args.map(arg => simpleKeys(arg)) },
        null,
        2
      ),
      date: stringify(new Date())
    };

    let oldEvents = (get("events") || {})[scene._id] || [];

    set("events", { [scene._id]: [...oldEvents, event] }, true, false);
  }

  get target() {
    const { scene, set, get } = this.props;

    return Synchronizer(scene.target, {
      setViewportState: (...args) => this.setViewportState(...args),
      getViewportState: () => this.state.targetState,
      targetProps: this.initialProps,
      pushEvent: (key, ...args) => {
        this.pushEvent(key, args);
      }
    });
  }

  get size() {
    const { config, devices } = this.props;
    let size = {};

    let key = config.viewport.key;
    if (key == "custom") {
      size = {
        w: `${config.viewport.width}vw`,
        h: `${config.viewport.height}vh`
      };
    } else {
      let device = devices.find(d => d.key == key);
      if (device) {
        size = {
          w: device.width,
          h: device.height
        };
      }
    }

    return size;
  }

  render() {
    const { scene } = this.props;
    const Target = this.target;

    return (
      <ViewportContainer>
        <ViewportWrapper
          {...this.size}
          centered={scene.options && scene.options.centered}
        >
          <TargetWrapper>
            <Target />
          </TargetWrapper>
        </ViewportWrapper>
      </ViewportContainer>
    );
  }
}

export default Viewport;
