import React, { Component, Fragment } from "react";
import is from "is";
import FrameComponent from "react-frame-component";
import { StyleSheetManager } from "styled-components";

/*globals
setTimeout
document
*/

let target;

if (typeof document !== "undefined") {
  target = document.createElement("div");
}

const d2s = node => {
  let parent = document.createElement("div");
  if ("outerHTML" in parent) return node.outerHTML;
  let div = parent.cloneNode();
  div.appendChild(node.cloneNode(true));
  return div.innerHTML;
};

class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      ready: false
    };
  }

  updateStyles() {
    const {
      styleClassNames,
      stylesheet,
      injectGlobalStylesheets,
      injectStyledComponentsStylesheets
    } = this.props;

    let styles = [];

    if (is.array(styleClassNames)) {
      let styleTags = [];
      for (let className of styleClassNames) {
        let tag = document.getElementsByClassName(className);
        if (tag) {
          styleTags = styleTags.concat(Array.from(tag));
        }
      }
      for (let style of styleTags) {
        styles.push(d2s(style));
      }
    }

    if (injectGlobalStylesheets) {
      let globalStyles = Array.from(document.getElementsByTagName("style"));
      for (let style of globalStyles) {
        styles.push(d2s(style));
      }
    }

    if (stylesheet) {
      styles.push(`<style>${stylesheet}</style>`);
    }

    if (injectStyledComponentsStylesheets) {
      styles.push(d2s(target));
    }

    this.setState({ styles });
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(() => {
      this.updateStyles();
    }, 1);
    // TODO: why we need timeout?
  }

  componentDidMount() {
    setTimeout(() => {
      this.updateStyles();
    }, 1);
    // TODO: why we need timeout?
  }

  render() {
    const { styles = [], children } = this.state;

    const head = (
      <Fragment>
        {styles.map((style, idx) => {
          return (
            <div
              id={`component-styles-${idx}`}
              key={idx}
              dangerouslySetInnerHTML={{ __html: style }}
            />
          );
        })}
      </Fragment>
    );

    let frameProps = { ...this.props, head };

    delete frameProps.stylesheet;
    delete frameProps.styleClassNames;
    delete frameProps.injectStyledComponentsStylesheets;
    delete frameProps.injectGlobalStylesheets;

    return (
      <StyleSheetManager target={target}>
        <FrameComponent {...frameProps}>{this.props.children}</FrameComponent>
      </StyleSheetManager>
    );
  }
}

export default Frame;
