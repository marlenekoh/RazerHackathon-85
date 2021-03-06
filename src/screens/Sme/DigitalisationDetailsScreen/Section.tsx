import React from "react";
import { Card, IconButton } from "react-native-paper";
import { Row } from "@components/Row";
import { Expander } from "@components/Expander";
import { Text } from "@components/Text";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Color } from "@common/Color";

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
    <Card style={{ backgroundColor: Color.Foreground1 }}>
      <Card.Content>
        <Row>
          <Text h1 {...textProps} wrap>
            {title}
          </Text>
        </Row>
        <Text {...textProps}>{text}</Text>
        <Expander vertical size={12} />
      </Card.Content>
      {completed && (
        <Card.Actions style={{ backgroundColor: Color.Foreground3 }}>
          <Row>
            <Expander />
            <Text h5 color={Color.TextTertiary}>
              100% completed
            </Text>
            <IconButton
              icon="checkbox-marked-circle"
              color={Color.HighlightDisabled}
              style={{ marginTop: -2, marginBottom: -2 }}
            />
            <Expander />
          </Row>
        </Card.Actions>
      )}
    </Card>
  );
};
