import React from "react";
import styled from "styled-components";

const WelcomeWrapper = styled.div`
  font-family: sans-serif;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  transition: 0.2s;
  background: ${p => (p.theme == "dark" ? "#282C34" : "#f0f0f0")};
  border-radius: 4px;
`;

const Title = styled.div`
  font-size: 24px;
  padding: 8px;
  font-weight: bold;
  color: #f1576d;
`;

const Description = styled.div`
  font-size: 16px;
  padding: 8px;
  color: #b050ba;
`;

const Feature = styled.li`
  font-size: 16px;
  padding: 8px;
  color: #d2b270;
`;

const Features = styled.div`
  font-size: 16px;
  padding: 8px;
`;

class Welcome extends React.Component {
  render() {
    const {
      title = "Title",
      description = "Description",
      features = ["Feature"]
    } = this.props;
    return (
      <WelcomeWrapper {...this.props}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Features>
          {features.map((f, idx) => {
            return <Feature key="idx">{f}</Feature>;
          })}
        </Features>
      </WelcomeWrapper>
    );
  }
}
Welcome.displayName = "Welcome";
export default Welcome;
