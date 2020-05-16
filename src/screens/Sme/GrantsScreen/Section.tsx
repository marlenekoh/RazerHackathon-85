import React from "react";
import { Card, Chip, Button } from "react-native-paper";

import { Text } from "@components/Text";
import { Row } from "@components/Row";
import { Expander } from "@components/Expander";

interface SectionProps {
  applied?: boolean;
  approved?: boolean;
  onPress?: () => void;
}

export const Section: React.FunctionComponent<SectionProps> = ({
  applied,
  onPress,
  approved,
}) => {
  return (
    <Card onPress={onPress}>
      <Card.Content>
        <Text h3>Startup SG Founder Grant</Text>
        <Text>Singapore</Text>
        <Expander vertical size={12} />
        <Row>
          <Chip>Industry</Chip>
          <Expander />
        </Row>
        <Expander vertical size={12} />
        <Row>
          <Chip
            mode="outlined"
            style={{ borderColor: "blue", borderWidth: 2 }}
            textStyle={{ color: "blue" }}
          >
            {approved ? "Closed" : applied ? "Pending" : "Applicable"}
          </Chip>
          <Expander />
        </Row>
        <Expander vertical size={12} />
        <Row>
          <Text h3>s$30,000*</Text>
          <Expander />
          {!applied && <Button>Learn More</Button>}
        </Row>
        <Expander vertical size={12} />
      </Card.Content>
      {approved ? (
        <Card.Actions style={{ backgroundColor: "lightgreen" }}>
          <Text>
            Your application has been <Text h5>Approved</Text>.
          </Text>
        </Card.Actions>
      ) : (
        applied && (
          <Card.Actions style={{ backgroundColor: "lightgrey" }}>
            <Text>
              You applied for this grant on <Text h5>16 May 2020</Text>.
            </Text>
          </Card.Actions>
        )
      )}
    </Card>
  );
};
