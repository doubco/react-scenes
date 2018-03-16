import React, { Component } from "react";

import SyntaxHighlighter, {
  registerLanguage
} from "react-syntax-highlighter/prism-light";
import json from "react-syntax-highlighter/languages/prism/json";
import highlighterStyle from "react-syntax-highlighter/styles/prism/coy";

import { EventsContainer, EventItem, EventItemKey } from "./styled/events";

registerLanguage("json", json);

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
  }

  render() {
    const { active } = this.state;
    const { events } = this.props;
    return (
      <EventsContainer>
        {events.map((e, idx) => {
          return (
            <EventItem
              key={idx}
              onClick={() =>
                this.setState({ active: active == idx ? null : idx })
              }
            >
              <EventItemKey>{e.key}</EventItemKey>
              {active == idx && (
                <SyntaxHighlighter language={"json"} style={highlighterStyle}>
                  {e.args}
                </SyntaxHighlighter>
              )}
            </EventItem>
          );
        })}

        {!events.length && (
          <EventItem>
            <EventItemKey>No event has been triggers.</EventItemKey>
          </EventItem>
        )}
      </EventsContainer>
    );
  }
}

export default Events;
