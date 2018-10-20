import React, { Component } from "react";

import markdown from "../../utils/markdown";

import { Docs } from "./styled";

class DocsPanel extends Component {
  render() {
    const { scene } = this.props;
    const { docs } = scene;

    return (
      <Docs>
        {docs && (
          <div
            dangerouslySetInnerHTML={{
              __html: markdown(docs)
            }}
          />
        )}
      </Docs>
    );
  }
}

export default DocsPanel;
