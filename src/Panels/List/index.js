import React, { Component } from "react";

import { Parent, Node, Title, Badge } from "./styled";

class ListPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.collapseInit();
    this.scrollToActive();
  }

  scrollToActive() {
    // eslint-disable-next-line
    const el = document.querySelector("#active-parent");
    // eslint-disable-next-line
    const parent = document.querySelector("#panel-container");
    if (el && parent) {
      parent.scrollTop = el.offsetTop;
    }
  }

  get collapsed() {
    const { config = {} } = this.props;
    return config.collapsed || [];
  }

  collapseInit() {
    const { scene, set, get, config = {} } = this.props;

    if (scene) {
      if (config.collapsed) {
        let collapsed = this.collapsed;
        set("config", { collapsed });
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
    const { config } = this.props;
    return this.collapsed.indexOf(key) > -1;
  }

  collapseAll(keys) {
    const { config } = this.props;
    let collapsed = this.collapsed.slice();
    collapsed = this.collapsed.concat(keys);
    this.updateCollapsed(collapsed);
  }

  collapse(key) {
    const { config } = this.props;
    let collapsed = this.collapsed.slice();
    collapsed.push(key);
    this.updateCollapsed(collapsed);
  }

  uncollapse(key) {
    const { config } = this.props;
    let collapsed = this.collapsed.slice();
    let idx = collapsed.indexOf(key);
    if (idx > -1) {
      collapsed.splice(idx, 1);
      this.updateCollapsed(collapsed);
    }
  }

  updateCollapsed(collapsed) {
    const { set } = this.props;
    set("config", { collapsed });
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

  get scenes() {
    const { collapsed } = this.state;
    const { set, scene } = this.props;
    let treeDOM = tree => {
      return Object.keys(tree).map((key, idx) => {
        if (tree[key].data) {
          let active = scene._id == tree[key].data._id;
          return (
            <div
              key={key || idx}
              onClick={() => {
                set("active", { scene: tree[key].data._id });
              }}
            >
              <Node className={active ? "active-node" : null} active={active}>
                {key}
              </Node>
            </div>
          );
        } else {
          let active = Object.keys(tree[key])
            .map(k => tree[key][k].data._id == scene._id)
            .find(x => x == true);

          return (
            <Parent key={key || idx}>
              <Title
                onClick={() => {
                  if (this.isCollapsed(key)) {
                    this.uncollapse(key);
                  } else {
                    this.collapse(key);
                  }
                }}
                active={active}
                id={active ? "active-parent" : null}
                collapsed={this.isCollapsed(key)}
              >
                {key}
                <Badge>{Object.keys(tree[key]).length}</Badge>
              </Title>
              {!this.isCollapsed(key) && treeDOM(tree[key])}
            </Parent>
          );
        }
      });
    };

    if (scene) {
      return treeDOM(this.tree());
    }
    return null;
  }

  render() {
    return <div>{this.scenes}</div>;
  }
}

export default ListPanel;
