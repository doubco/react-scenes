import styled from "styled-components";
import UI from "../../../theme";
const { cond, is, get, variant, size } = UI;

export const EventsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${size`item:title.padding|px`};
  overflow: auto;
  flex-shirnk: 1;
  font-size: ${size`item:title.size|px`};
`;

export const EventItem = styled.div`
  padding: 8px;
  width: 100%;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.02);
  margin-bottom: ${size`item:title.padding|px`};

  & > pre {
    padding: 4px !important;
    margin: 0 !important;
    height: 128px !important;
    width: 100% !important;
    overflow: auto !important;
    background: none !important;
    * {
      background: none !important;
    }
    & > code {
      overflow: auto;
      width: 100% !important;
      font-size: ${size`item:title.size|px`};
    }
  }
`;

export const EventItemKey = styled.div`
  padding: ${size`item:title.padding|px`};
  width: 100%;
  border-radius: 2px;
  cursor: pointer;
  text-align: center;
`;
