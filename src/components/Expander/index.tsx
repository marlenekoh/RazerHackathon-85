import styled from "styled-components/native";

interface ExpanderProps {
  vertical?: boolean;
  size?: number;
  children?: React.ReactNode;
}

export const Expander = styled.View<ExpanderProps>`
  ${({ vertical, size, children }) => {
    if (size) {
      if (children) {
        return `padding: ${vertical ? `${size}px 0` : `0 ${size}px`}`;
      } else {
        return vertical ? `height: ${size}px` : `width: ${size}px;`;
      }
    }
    return `flex-basis: 0;
      flex-grow: 1 !important;`;
  }}
`;
