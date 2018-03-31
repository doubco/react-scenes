import React, { Component } from "react";

import marked from "marked";

import { DocsContainer } from "./styled/docs";

let renderer = new marked.Renderer();

renderer.link = (href, title, text) => {
  return `<a target="_blank" href="${href}" title="${title}">${text}</a>`;
};

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true,
  linksInNewTab: true
});

class Docs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { docs } = this.props;
    return (
      <DocsContainer>
        {docs && (
          <div
            dangerouslySetInnerHTML={{
              __html: marked(docs, {
                renderer: renderer
              })
            }}
          />
        )}
      </DocsContainer>
    );
  }
}

export default Docs;
