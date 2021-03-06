import styled from "styled-components/native";
import { getFontStyle } from "./getFontStyle";
import { Color } from "@common/Color";

export interface TextStyle {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  p1?: boolean;
  p2?: boolean;
}

interface TextProps extends TextStyle {
  color?: string;
  wrap?: boolean;
  align?: "center" | "left" | "right" | "justify";
  underline?: boolean;
  bold?: boolean;
}

export const Text = styled.Text<TextProps>`
  font-size: ${(props) => getFontStyle(props).fontSize}px;
  ${(props) => getFontStyle(props).fontStyle}
  color: ${({ color }) => (color ? color : Color.TextPrimary)};
  text-align:${({ align }) => align || "left"};
  ${({ wrap }) =>
    wrap &&
    `
    flex: 1;
  flex-wrap: wrap;
  `}

  ${({ underline }) =>
    underline &&
    `
    text-decoration: underline;
  `}

  ${({ bold }) =>
    bold &&
    `
    font-weight: bold;
  `}
  
`;
