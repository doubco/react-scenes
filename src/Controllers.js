import React, { Component } from "react";

import { ControllersWrapper, ControllersContainer } from "./styled/controllers";

class Controllers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: {}
    };
  }

  render() {
    const { controllers = [], targetProps, set, config } = this.props;
    return (
      <ControllersContainer position={config.panel.position}>
        {controllers.map(({ controller, key, title }, idx) => {
          return controller.input ? (
            <ControllersWrapper
              position={config.panel.position}
              key={key || idx}
            >
              {controller.input(
                targetProps[key],
                value => set(key, value, controller),
                title,
                this.state.states[key] || {},
                newState =>
                  this.setState({
                    states: {
                      ...this.state.states,
                      [key]: { ...(this.state.states[key] || {}), ...newState }
                    }
                  })
              )}
            </ControllersWrapper>
          ) : null;
        })}
      </ControllersContainer>
    );
  }
}

export default Controllers;
