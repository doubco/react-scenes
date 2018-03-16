import React, { Component } from "react";
import { Store } from "./helpers/store";

import {
  PickerContainer,
  TreeWrapper,
  PickerTitle,
  TreeNode,
  TreeNodeTitle,
  TreeNodes,
  TreeNodeBullet,
  Triangle
} from "./styled/picker";

import { TabsContainer } from "./styled/tabs";

import Sizer from "./Sizer";
import Tabs from "./Tabs";

import defaultActions from "./defaults/actions";

class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: []
    };
  }

  componentDidMount() {
    this.collapseInit();
  }

  collapseInit() {
    const { scene } = this.props;

    if (scene) {
      if (Store.get("collapsed")) {
        let collapsed = Store.get("collapsed");
        this.setState({ collapsed });
      } else {
        let keys = [];
        let collectKeys = tree => {
          Object.keys(tree).map((key, idx) => {
            if (!tree[key].data) {
              keys.push(key);
              collectKeys(tree[key]);
            }
          });
        };
        collectKeys(this.tree());

        let titleTree = scene.title.split(">");
        titleTree.pop();

        titleTree.forEach(key => {
          keys.splice(keys.indexOf(key), 1);
        });

        this.collapseAll(keys);
      }
    }
  }

  isCollapsed(key) {
    return this.state.collapsed.indexOf(key) > -1;
  }

  collapseAll(keys) {
    let collapsed = this.state.collapsed.slice();
    collapsed = collapsed.concat(keys);

    this.updateCollapsed(collapsed);
  }
  collapse(key) {
    let collapsed = this.state.collapsed.slice();
    collapsed.push(key);

    this.updateCollapsed(collapsed);
  }

  uncollapse(key) {
    let collapsed = this.state.collapsed.slice();
    let idx = this.state.collapsed.indexOf(key);
    if (idx > -1) {
      collapsed.splice(idx, 1);
      this.updateCollapsed(collapsed);
    }
  }

  updateCollapsed(collapsed) {
    this.setState({ collapsed });
    Store.set({ collapsed });
  }

  tree() {
    const { scenes } = this.props;

    let tree = scenes.map(({ title }) => title).reduce((hier, title) => {
      let x = hier;
      title.split(">").forEach(item => {
        if (!x[item]) {
          x[item] = {};
        }
        x = x[item];
      });
      x.data = scenes[scenes.map(({ title }) => title).indexOf(title)];
      return hier;
    }, {});

    return tree;
  }

  scenes() {
    const { collapsed } = this.state;
    const { setScene, scene } = this.props;
    let treeDOM = tree => {
      return Object.keys(tree).map((key, idx) => {
        if (tree[key].data) {
          return (
            <div
              key={key || idx}
              onClick={() => {
                setScene(tree[key].data._id);
              }}
            >
              <TreeNode active={scene._id == tree[key].data._id}>
                {key}
              </TreeNode>
            </div>
          );
        } else {
          return (
            <TreeNodes key={key || idx}>
              <TreeNodeTitle
                onClick={() => {
                  if (this.isCollapsed(key)) {
                    this.uncollapse(key);
                  } else {
                    this.collapse(key);
                  }
                }}
                collapsed={this.isCollapsed(key)}
              >
                <TreeNodeBullet>
                  <Triangle />
                </TreeNodeBullet>{" "}
                {key}
              </TreeNodeTitle>
              {!this.isCollapsed(key) && treeDOM(tree[key])}
            </TreeNodes>
          );
        }
      });
    };

    if (scene) {
      return treeDOM(this.tree());
    }
    return null;
  }

  handleOnActionClick(action) {
    action.onClick({
      props: this.props,
      state: this.state,
      store: Store,
      setState: (...args) => this.setState(...args)
    });
  }

  actions() {
    let actions = [...defaultActions];

    if (this.props.actions) {
      actions = actions.concat(this.props.actions);
    }

    return actions;
  }
  render() {
    const { scenes, title, config } = this.props;
    const actions = this.actions();

    return (
      <PickerContainer>
        <PickerTitle>{title ? title : `🌉 Scenes`}</PickerTitle>
        <TreeWrapper sizer={config.sizer}>{this.scenes()}</TreeWrapper>
        <Sizer {...this.props} />
        <Tabs
          tabs={actions}
          onClick={action => this.handleOnActionClick(action)}
          payload={{
            props: this.props,
            state: this.state,
            store: Store
          }}
        />
      </PickerContainer>
    );
  }
}

export default Picker;
