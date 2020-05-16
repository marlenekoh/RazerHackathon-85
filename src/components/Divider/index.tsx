import styled from "styled-components/native";

interface DividerProps {
  vertical?: boolean;
  length?: number;
}
export const Divider = styled.View<DividerProps>`
  ${({ vertical, length }) =>
    vertical
      ? `height: ${length ? `${length}px` : "auto"};
    border-left-color: #979797;
    border-left-width: 1px;`
      : `width: ${length ? `${length}px` : "auto"};
      border-bottom-color: #979797;
    border-bottom-width: 1px;`};
`;
