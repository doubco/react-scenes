import React, { Component } from "react";
import is from "./helpers/is";

import { Store } from "./helpers/store";

import { TabsContainer } from "./styled/tabs";
import { PanelContainer } from "./styled/panel";
import Tabs from "./Tabs";

import defaultPanels from "./defaults/panels";

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null
    };
  }

  componentDidMount() {
    // for SSR
    this.setState({ active: this.lastPanel() });
  }

  lastPanel() {
    const panels = this.panels();

    let lastPanel = Store.get("lastPanel");

    if (panels.map(({ _id }) => _id).indexOf(lastPanel) == -1)
      lastPanel = panels && panels.length ? panels[0]._id : null;

    return lastPanel;
  }

  panels() {
    let panels = [...defaultPanels];

    if (this.props.panels) {
      panels = panels.concat(this.props.panels);
    }

    return panels;
  }

  actions() {
    const { active } = this.state;

    const panels = this.panels();

    let idx = panels.map(({ _id }) => _id).indexOf(active);
    let actions = [];

    if (idx > -1 && panels && panels[idx] && panels[idx].actions) {
      actions = panels[idx].actions;
    }

    return actions;
  }

  handleOnClick(tab) {
    this.setState({ active: tab._id });
    Store.set({ lastPanel: tab._id });
  }

  handleOnActionClick(action) {
    action.onClick({
      props: this.props,
      state: this.state,
      store: Store,
      setState: (...args) => this.setState(...args)
    });
  }

  render() {
    const { active } = this.state;
    const panels = this.panels();
    const actions = this.actions();

    return (
      <PanelContainer>
        <Tabs
          tabs={panels}
          onClick={tab => this.handleOnClick(tab)}
          payload={{
            props: this.props,
            state: this.state,
            store: Store
          }}
        />
        <TabsContainer>
          {active &&
            panels.map((tab, idx) => {
              if (active == tab._id)
                return <tab.component key={tab._id || idx} {...this.props} />;

              return null;
            })}
        </TabsContainer>
        <Tabs
          tabs={actions}
          onClick={action => this.handleOnActionClick(action)}
          payload={{
            props: this.props,
            state: this.state,
            store: Store
          }}
        />
      </PanelContainer>
    );
  }
}

export default Panel;
