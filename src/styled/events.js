import styled from "styled-components";

export const EventsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  overflow: auto;
  flex-shirnk: 1;
  font-size: 13px;
`;

export const EventItem = styled.div`
  padding: 8px;
  width: 100%;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.02);
  margin-bottom: 8px;

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
      font-size: 13px;
    }
  }
`;

export const EventItemKey = styled.div`
  padding: 4px;
  width: 100%;
  border-radius: 2px;
  cursor: pointer;
  text-align: center;
`;
