import styled from "styled-components/native";

interface RowProps {
  alignItems?: "center" | "flex-start" | "flex-end";
}

export const Row = styled.View<RowProps>`
  flex-direction: row;
  align-items: ${({ alignItems }) => alignItems || "center"};
`;
