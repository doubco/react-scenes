import React, { Component } from "react";

import copy from "clipboard-copy";
import SyntaxHighlighter, {
  registerLanguage
} from "react-syntax-highlighter/prism-light";
import jsx from "react-syntax-highlighter/languages/prism/jsx";
import highlighterStyle from "react-syntax-highlighter/styles/prism/coy";

import stringify from "../../utils/stringify";

import { CodeContainer, CopyButton } from "./styled";

/*globals
setTimeout
*/

registerLanguage("jsx", jsx);

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }

  get initialProps() {
    const { scene } = this.props;
    const { controllers } = scene;
    let initialValues = { ...scene.props };

    if (controllers && controllers.length) {
      controllers.forEach(({ controller, key }) => {
        if (initialValues[key] == undefined) {
          initialValues[key] = controller.process(controller.initialValue);
        }
      });
    }

    return initialValues;
  }

  render() {
    const { copied } = this.state;

    const { scene } = this.props;

    let Tag = scene.displayName || scene.target.name;

    let code = "";

    try {
      code = stringify(scene.target({ props: this.initialProps }), {
        depthLim: 20
      });
    } catch (e) {
      // console.log("Code stringify error: ", e);
    }

    if (code == "__UnknownType" || code == "") {
      code = stringify(<Tag {...this.initialProps} />, { depthLim: 20 });
    }

    return (
      <CodeContainer>
        <SyntaxHighlighter
          wrapLines
          showLineNumbers={false}
          language={"jsx"}
          style={highlighterStyle}
        >
          {code}
        </SyntaxHighlighter>

        <CopyButton
          copied={copied}
          onClick={() => {
            this.setState({ copied: true }, () => {
              setTimeout(() => {
                this.setState({ copied: false });
              }, 1000);
            });
            copy(code);
          }}
        >
          {copied ? "Copied" : "Copy"}
        </CopyButton>
      </CodeContainer>
    );
  }
}

export default Code;
