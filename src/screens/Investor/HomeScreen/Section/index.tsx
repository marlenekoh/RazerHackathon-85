import React from "react";
import { Card, Button } from "react-native-paper";

import { Text } from "@components/Text";
import { Expander } from "@components/Expander";

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
      <Card onPress={onCardPress}>
        <Card.Content>{content}</Card.Content>
        <Card.Actions>
          <Expander />
          <Button onPress={onViewMore}>View More</Button>
        </Card.Actions>
      </Card>
    </Expander>
  );
};
