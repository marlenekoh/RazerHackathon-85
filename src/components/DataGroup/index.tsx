import React from "react";
import { Row } from "@components/Row";
import { Text } from "@components/Text";
import { Expander } from "@components/Expander";

interface DataGroupProps {
  label: string;
  value: string;
  subtitle?: string;
  large?: boolean;
}

export const DataGroup: React.FunctionComponent<DataGroupProps> = ({
  label,
  value,
  subtitle,
  large,
}) => {
  const labelProps = large ? { h3: true } : { p1: true };
  const valueProps = large ? { h1: true } : { h2: true };
  return (
    <Expander vertical size={6}>
      <Text {...labelProps}>{label}</Text>
      <Text {...valueProps}>{value}</Text>
      {Boolean(subtitle) && <Text p2>{subtitle}</Text>}
    </Expander>
  );
};
