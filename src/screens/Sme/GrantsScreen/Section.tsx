import React from "react";
import { Card, Chip, Button } from "react-native-paper";

import { Text } from "@components/Text";
import { Row } from "@components/Row";
import { Expander } from "@components/Expander";
import { Color } from "@common/Color";

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
    <Card style={{ backgroundColor: Color.Foreground1 }} onPress={onPress}>
      <Card.Content>
        <Text h3>Startup SG Founder Grant</Text>
        <Text>Singapore</Text>
        <Expander vertical size={12} />
        <Row>
          <Chip
            textStyle={{ fontWeight: "bold" }}
            style={{ backgroundColor: Color.Highlight2 }}
          >
            Industry
          </Chip>
          <Expander />
        </Row>
        <Expander vertical size={12} />
        <Row>
          <Chip
            mode="outlined"
            style={{
              backgroundColor: "transparent",
              borderColor: Color.Highlight1,
              borderWidth: 2,
            }}
            textStyle={{ color: Color.Highlight1 }}
          >
            {approved ? "Closed" : applied ? "Pending" : "Applicable"}
          </Chip>
          <Expander />
        </Row>
        <Expander vertical size={12} />
        <Row>
          <Text h3>S$30,000*</Text>
          <Expander />
          {!applied && <Button color={Color.Highlight1}>Learn More</Button>}
        </Row>
        <Expander vertical size={12} />
      </Card.Content>
      {approved ? (
        <Card.Actions style={{ backgroundColor: Color.Highlight1 }}>
          <Text>
            Your application has been <Text h5>Approved</Text>.
          </Text>
        </Card.Actions>
      ) : (
        applied && (
          <Card.Actions style={{ backgroundColor: Color.Foreground3 }}>
            <Text>
              You applied for this grant on <Text h5>16 May 2020</Text>.
            </Text>
          </Card.Actions>
        )
      )}
    </Card>
  );
};
