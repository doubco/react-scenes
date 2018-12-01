import React, { Component, Fragment } from "react";
import { ThemeProvider } from "styled-components";

import { Store } from "../utils/store";
import slugify from "../utils/slugify";

import { theme } from "../theme";
import { DocumentStyle } from "../theme/Document";

import Viewport from "../Viewport";
import Panel from "../Panel";

import { ScenesWrapper } from "./styled";

import defaultPanels from "../_defaults/panels";
import defaultDevices from "../_defaults/devices";

class Scenes extends Component {
  constructor(props) {
    super(props);

    const { storeKey } = this.props;

    this.storeKey = storeKey ? storeKey : "__scenesv2";
    const saved = {
      active: Store.get("active", this.storeKey),
      config: Store.get("config", this.storeKey)
    };

    this.state = {
      ready: false,
      scenesData: this.scenesData,
      config: saved.config || this.initial.config,
      active: saved.active || this.initial.active
    };

    this.set = this.set.bind(this);
    this.get = this.get.bind(this);

    Store.set({ initial: this.initial });
  }

  componentDidMount() {
    //eslint-disable-next-line
    this.setState({ ready: true });
  }

  get scenesData() {
    let scenesData = {};
    let cachedScenesData = Store.get("scenesData", this.storeKey);

    this.scenes.forEach(s => {
      let cached =
        cachedScenesData && cachedScenesData[s._id]
          ? cachedScenesData[s._id]
          : {};
      scenesData[s._id] = {
        options: { ...s.options, ...cached.options },
        props: { ...cached.props }
      };
    });

    return scenesData;
  }

  get ui() {
    return {
      ...this.config,
      ...this.scene.options
    };
  }

  get initial() {
    const { config = {} } = this.props;
    const initialConfig = {
      caching: false,
      viewport: { key: "custom", width: 100, height: 100 },
      ...config
    };

    let panel = this.panels[0] ? this.panels[0]._id : null;
    let scene = this.scenes[0] ? this.scenes[0]._id : null;

    const initialActive = {
      scene,
      panel
    };

    return {
      config: initialConfig,
      active: initialActive
    };
  }

  get config() {
    return this.state.config;
  }

  get panels() {
    const { panels = [] } = this.props;
    return [...defaultPanels, ...panels];
  }

  get devices() {
    const { devices = [] } = this.props;
    return [...defaultDevices, ...devices];
  }

  get scenes() {
    const { scenes = [] } = this.props;

    return scenes.map((scene, idx) => {
      if (!scene._id) {
        scene._id = scene.title ? slugify(scene.title) : idx;
      }
      return scene;
    });
  }

  get scene() {
    const { active, scenesData = {} } = this.state;
    let scene = this.scenes.find(s => s._id == active.scene) || {};
    let cached = scenesData[active.scene];
    if (scene._id) {
      return { ...scene, ...cached };
    } else {
      return this.scenes[0] || {};
    }
  }

  set(key, value, direct, caching = true, state = true) {
    let newValue = direct ? value : { ...this.state[key], ...value };
    if (state) {
      this.setState({ [key]: newValue });
    }
    if (caching) {
      Store.set({ [key]: newValue }, this.storeKey);
    }
  }

  get(key, fromStore) {
    if (fromStore) {
      return Store.get(key);
    }
    return this.state[key] || {};
  }

  render() {
    const { title = "React Scenes", standalone } = this.props;
    const { ready } = this.state;
    if (!ready) return null;
    return (
      <Fragment>
        {standalone && <DocumentStyle />}
        <ThemeProvider theme={theme}>
          <ScenesWrapper {...this.ui}>
            <Viewport
              {...this.ui}
              devices={this.devices}
              panels={this.panels}
              scenes={this.scenes}
              scene={this.scene}
              config={this.config}
              set={this.set}
              get={this.get}
            />
            <Panel
              {...this.ui}
              title={title}
              devices={this.devices}
              panels={this.panels}
              scenes={this.scenes}
              scene={this.scene}
              config={this.config}
              set={this.set}
              get={this.get}
            />
          </ScenesWrapper>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default Scenes;
