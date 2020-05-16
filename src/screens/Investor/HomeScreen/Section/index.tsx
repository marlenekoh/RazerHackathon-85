import React from "react";
import { Card, Button } from "react-native-paper";

import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { Color } from "@common/Color";

interface SectionProps {
  title: string;
  content: React.ReactNode;
  onCardPress?: () => void;
  onViewMore?: () => void;
}

export const Section: React.FunctionComponent<SectionProps> = ({
  title,
  content,
  onCardPress,
  onViewMore,
}) => {
  return (
    <Expander size={18}>
      <Text h1>{title}</Text>
      <Expander vertical size={10} />
      <Card
        style={{ backgroundColor: Color.Foreground1 }}
        onPress={onCardPress}
      >
        <Card.Content>{content}</Card.Content>
        <Card.Actions>
          <Expander />
          <Button color={Color.Highlight1} onPress={onViewMore}>
            View More
          </Button>
        </Card.Actions>
      </Card>
    </Expander>
  );
};
