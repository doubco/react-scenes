import React, { Component } from "react";
import is from "is";

import { Store } from "./helpers/store";

import { Tab, Tabs, TabsContainer } from "./styled/tabs";

class TabsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { tabs, payload, onClick } = this.props;
    return (
      <Tabs>
        {tabs.map((item, idx) => {
          const { _id, active, icon } = item;

          return (
            <Tab
              key={`tab-${_id}-${idx}`}
              onClick={() => onClick(item)}
              active={active ? active(payload) : null}
            >
              {is.string(icon) && icon}
              {is.fn(icon) && icon(payload)}
            </Tab>
          );
        })}
      </Tabs>
    );
  }
}

export default TabsComponent;
