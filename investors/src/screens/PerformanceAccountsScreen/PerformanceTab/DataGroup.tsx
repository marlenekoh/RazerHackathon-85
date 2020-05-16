import React from "react";
import { Row } from "@components/Row";
import { Text } from "@components/Text";
import { Expander } from "@components/Expander";

interface DataGroupProps {
  label: string;
  value: string;
  subtitle?: string;
}

export const DataGroup: React.FunctionComponent<DataGroupProps> = ({
  label,
  value,
  subtitle,
}) => {
  return (
    <Expander vertical size={6}>
      <Text>{label}</Text>
      <Text h2>{value}</Text>
      {Boolean(subtitle) && <Text p2>{subtitle}</Text>}
    </Expander>
  );
};
