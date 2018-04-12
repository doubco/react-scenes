import React, { Component } from "react";
import is from "is";
import copy from "clipboard-copy";
import SyntaxHighlighter, {
  registerLanguage
} from "react-syntax-highlighter/prism-light";
import jsx from "react-syntax-highlighter/languages/prism/jsx";
import highlighterStyle from "react-syntax-highlighter/styles/prism/coy";

import stringify from "./helpers/stringify";

import { CodeContainer, CopyButton } from "./styled/code";

/*globals
setTimeout
*/

registerLanguage("jsx", jsx);

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }

  render() {
    const { copied } = this.state;

    const { target, targetProps, displayName } = this.props;

    let Tag = displayName || target.name;

    let code = "";

    try {
      code = stringify(target({ props: targetProps }), { depthLim: 20 });
    } catch (e) {
      console.log("Code stringify error: ", e);
    }

    if (code == "__UnknownType" || code == "") {
      code = stringify(<Tag {...targetProps} />, { depthLim: 20 });
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
              }, 500);
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
