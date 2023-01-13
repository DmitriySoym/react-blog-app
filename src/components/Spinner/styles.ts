import styled from "styled-components";
import { Color } from "ui";

const StyledSpinner = styled.div`
  color: ${Color.PRIMARY};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;

  &::after {
    animation: changeContent 0.8s linear infinite;
    display: block;
    content: "⠋";
    font-size: 80px;
  }

  @keyframes changeContent {
    10% {
      content: "⠙";
    }
    20% {
      content: "⠹";
    }
    30% {
      content: "⠸";
    }
    40% {
      content: "⠼";
    }
    50% {
      content: "⠴";
    }
    60% {
      content: "⠦";
    }
    70% {
      content: "⠧";
    }
    80% {
      content: "⠇";
    }
    90% {
      content: "⠏";
    }
  }
`;

export { StyledSpinner };
