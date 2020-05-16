import React from "react";
import { Card, IconButton } from "react-native-paper";
import { Row } from "@components/Row";
import { Expander } from "@components/Expander";
import { Text } from "@components/Text";

interface SectionProps {
  title: string;
  text: string;
  completed?: boolean;
}

export const Section: React.FunctionComponent<SectionProps> = ({
  title,
  text,
  completed,
}) => {
  const textProps = completed ? { color: "gray" } : {};

  return (
    <Card style={{ backgroundColor: completed ? "#e8e8e8" : "white" }}>
      <Card.Content>
        <Row>
          <Text h1 {...textProps} wrap>
            {title}
          </Text>
          <IconButton icon="arrow-right" {...textProps} />
        </Row>
        <Text {...textProps}>{text}</Text>
        <Expander vertical size={12} />
      </Card.Content>
      {completed && (
        <Card.Actions style={{ backgroundColor: "lightgray" }}>
          <Row>
            <Expander />
            <Text h5>100% completed</Text>
            <IconButton
              icon="checkbox-marked-circle"
              color="blue"
              style={{ marginTop: -2, marginBottom: -2 }}
            />
            <Expander />
          </Row>
        </Card.Actions>
      )}
    </Card>
  );
};
