import React, { Component } from "react";

import { Wrapper } from "./styled";

class ControllersPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { scene = {}, set, get, config } = this.props;
    const { controllers = [], props = {} } = scene;
    const sceneData = get("scenesData")[scene._id] || {};

    return (
      <Wrapper>
        {controllers.map(({ controller, key, title }, idx) => {
          return controller.input ? (
            <div key={key || idx}>
              {controller.input({
                state: this.state,
                setState: (...args) => {
                  this.setState(...args);
                },
                value:
                  props[key] == undefined
                    ? controller.initialValue
                    : props[key],
                set: value => {
                  let newProps = { ...sceneData.props };
                  newProps[key] = controller.process(value);

                  set(
                    "scenesData",
                    {
                      [scene._id]: {
                        ...sceneData,
                        props: newProps
                      }
                    },
                    null,
                    config.caching
                  );
                },
                title
              })}
            </div>
          ) : null;
        })}
      </Wrapper>
    );
  }
}

export default ControllersPanel;
