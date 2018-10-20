import React, { Component, Fragment } from "react";
import Draggable, { DraggableCore } from "react-draggable";

import { isString } from "wtf-is-this";
import { theme } from "../theme";

import {
  PanelWrapper,
  ResizeHandle,
  ResizeHandleLine,
  Header,
  BottomBar,
  TopBar,
  Panels,
  PanelTitle,
  Button,
  Minimize
} from "./styled";

/* globals
window
*/
class Panel extends Component {
  constructor(props) {
    super(props);

    const { config } = this.props;

    this.state = {
      ready: false
    };

    this.onResize = this.onResize.bind(this);
  }

  get defaultPosition() {
    let w = { width: window.innerWidth, height: window.innerHeight };
    let panel = this.size;

    let position = {
      x: w.width - panel.width,
      y: w.height > panel.height ? w.height - panel.height : 0
    };

    return position;
  }

  get size() {
    return {
      width: theme.panel.normal.width + theme.panel.normal.margin * 2,
      height: theme.panel.normal.height + theme.panel.normal.margin * 2
    };
  }

  onResize() {
    const { set, config = {} } = this.props;
    let position = config.position;
    let panel = this.size;
    if (!position) position = this.defaultPosition;

    let w = { width: window.innerWidth, height: window.innerHeight };

    let xr = position.x + panel.width;
    let yt = position.y + panel.height;

    let snapx = w.width <= xr + 16 || w.width < position.x + panel.width;
    let snapy = w.height <= yt + 16 || w.height < position.y + panel.height;
    let newPosition = { ...position };
    if (snapx) {
      newPosition = {
        ...newPosition,
        x: w.width - panel.width
      };
    }
    if (snapy) {
      newPosition = {
        ...newPosition,
        y: w.height > panel.height ? w.height - panel.height : 0
      };
    }

    let newHeight = w.height - position.y - theme.panel.normal.margin * 2;
    if (newHeight < theme.panel.normal.height) {
      newHeight = theme.panel.normal.height;
    }
    if ((config.height || theme.panel.normal.height) > newHeight) {
      this.onPanelResize({ height: newHeight, save: true });
    }
    set("config", {
      position: newPosition
    });

    // console.log(w, position);
  }

  onPanelResize({ height, save }) {
    const { set, config = {} } = this.props;
    let position = config.position;
    let panel = this.size;
    if (!position) position = this.defaultPosition;

    let w = { width: window.innerWidth, height: window.innerHeight };
    let newHeight = height;

    if (newHeight <= theme.panel.normal.height) {
      newHeight = theme.panel.normal.height;
    }

    if (newHeight > w.height - position.y - theme.panel.normal.margin * 2) {
      newHeight = w.height - position.y - theme.panel.normal.margin * 2;
    }

    if (save) {
      set("config", {
        height: newHeight
      });
    }

    this.panel.style.height = `${newHeight}px`;
  }

  get activePanel() {
    const { panels = [], get } = this.props;
    const panelId = get("active").panel;
    const panel = panels.find(p => p._id == panelId);

    if (panel) {
      let Component = panel.component;
      if (Component) {
        return <Component {...this.props} />;
      }
    }
    return null;
  }

  get actionPanels() {
    let actions;
    const { panels = [], get, set, config } = this.props;
    const panelId = get("active").panel;
    const panel = panels.find(p => p._id == panelId);
    if (panel) {
      if (panel.actions && panel.actions.length) {
        actions = panel.actions.map((action, idx) => {
          let Component = action.component;
          if (Component) {
            return <Component key={idx} {...this.props} ui={this.ui} />;
          }
          return null;
        });
      }
    }

    return actions;
  }

  get actions() {
    let actions;
    const { panels = [], get, set, config } = this.props;
    const panelId = get("active").panel;
    const panel = panels.find(p => p._id == panelId);
    if (panel) {
      if (panel.actions && panel.actions.length) {
        actions = panel.actions.map((action, idx) => {
          return (
            <Button
              title={action.title || action._id}
              key={action._id || idx}
              {...this.ui}
              active={action.active ? action.active(this.props) : null}
              onClick={() => {
                if (action.onClick) action.onClick({ ...this.props });
              }}
            >
              {isString(action.icon) ? action.icon : action.icon(this.props)}
            </Button>
          );
        });
      }
    }

    return actions;
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  render() {
    const { config = {}, scene, set, get, ready, title, panels } = this.props;
    const active = get("active");
    const { minimized = false } = get("config");

    return (
      <Draggable
        position={config.position || this.defaultPosition}
        bounds={"parent"}
        handle=".react-draggable-handle"
        onStop={(e, data) => {
          set("config", {
            position: {
              x: data.x,
              y: data.y
            }
          });
        }}
      >
        <PanelWrapper
          style={{ height: config.height || theme.panel.normal.height }}
          ref={i => (this.panel = i)}
          minimized={minimized}
          {...this.ui}
        >
          <Header {...this.ui} className="react-draggable-handle">
            {title}
            <Minimize
              {...this.ui}
              onClick={() => {
                set("config", { minimized: !minimized });
                // eslint-disable-next-line
                setTimeout(() => {
                  this.onResize();
                }, 100);
              }}
            >
              {minimized ? "Expand" : "Minimize"}
            </Minimize>
          </Header>
          <TopBar {...this.ui}>
            <div />
            {panels.map((panel, idx) => {
              return (
                <Button
                  title={panel.title || panel._id}
                  key={panel._id || idx}
                  {...this.ui}
                  active={panel.active ? panel.active(this.props) : null}
                  onClick={() => {
                    if (panel.onClick) panel.onClick(this.props);
                    set("active", { panel: panel._id });
                  }}
                >
                  {isString(panel.icon) ? panel.icon : panel.icon(this.props)}
                </Button>
              );
            })}
            <div />
          </TopBar>

          <Panels id="panel-container" {...this.ui}>
            {active.panel != "scenes" && (
              <PanelTitle {...this.ui}>
                {scene.title.split(">").length > 1 ? (
                  <Fragment>
                    <div>{scene.title.split(">")[1]}</div>
                    <div>{scene.title.split(">")[0]}</div>
                  </Fragment>
                ) : (
                  scene.title
                )}
              </PanelTitle>
            )}
            {this.activePanel}
          </Panels>

          {this.actionPanels}

          {this.actions ? (
            <BottomBar {...this.ui}>
              <div />
              {this.actions}
              <div />
            </BottomBar>
          ) : null}

          <DraggableCore
            axis="y"
            handle=".react-resizable-handle"
            onDrag={(e, data) => {
              let newHeight = parseInt(this.panel.style.height) + data.deltaY;
              this.onPanelResize({
                height: newHeight
              });
            }}
            onStop={(e, data) => {
              this.onPanelResize({
                height: parseInt(this.panel.style.height),
                save: true
              });
            }}
          >
            <ResizeHandle {...this.ui} className="react-resizable-handle">
              <ResizeHandleLine {...this.ui} />
            </ResizeHandle>
          </DraggableCore>
        </PanelWrapper>
      </Draggable>
    );
  }
}

export default Panel;
