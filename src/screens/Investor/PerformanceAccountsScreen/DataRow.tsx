import React from "react";
import { Row } from "@components/Row";
import { Text } from "@components/Text";
import { Expander } from "@components/Expander";

interface DataRowProps {
  label: string;
  value: string;
  bold?: boolean;
}

export const DataRow: React.FunctionComponent<DataRowProps> = ({
  label,
  value,
  bold,
}) => {
  const textProps = bold ? { h5: true } : { p1: true };
  return (
    <Expander vertical size={6}>
      <Row>
        <Text {...textProps}>{label}</Text>
        <Expander />
        <Text {...textProps}>{value}</Text>
      </Row>
    </Expander>
  );
};
