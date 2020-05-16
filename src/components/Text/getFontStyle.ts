import { TextStyle } from ".";

export const getFontStyle = ({ h1, h2, h3, h4, h5, h6, p1, p2 }: TextStyle) => {
  if (h1) return { fontSize: 24, fontStyle: "font-weight: bold;" };
  if (h2) return { fontSize: 20, fontStyle: "font-weight: bold;" };
  if (h3) return { fontSize: 20 };
  if (h4) return { fontSize: 18, fontStyle: "font-weight: bold;" };
  if (h5) return { fontSize: 16, fontStyle: "font-weight: bold;" };
  if (h6) return { fontSize: 14, fontStyle: "font-weight: bold;" };
  if (p1) return { fontSize: 16 };
  if (p2) return { fontSize: 14 };
  return { fontSize: 16 };
};
