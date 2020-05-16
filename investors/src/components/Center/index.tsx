import styled from "styled-components/native";

interface CenterProps {
  vertical?: boolean;
}
export const Center = styled.View<CenterProps>`
  ${({ vertical }) =>
    vertical
      ? `flex-direction: row;
      align-items: center;`
      : `align-items:center`}
`;
