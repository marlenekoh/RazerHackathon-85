import React from "react";

import { Text } from "@components/Text";
import { ScrollView } from "react-native";
import { Expander } from "@components/Expander";
import { Card, Button } from "react-native-paper";
import { DataGroup } from "@components/DataGroup";
import { Row } from "@components/Row";
import { Divider } from "@components/Divider";

export const FundingTab: React.FunctionComponent = () => {
  return (
    <ScrollView>
      <Expander vertical size={20} />
      <Expander size={18}>
        <Text h1>Grants</Text>
        <Expander vertical size={10} />
        <Card>
          <Card.Content>
            <Row>
              <Expander>
                <DataGroup label="Funds Received" value="S$30,000" />
              </Expander>
              <Expander>
                <DataGroup label="Pending Grant/s" value="2" />
              </Expander>
            </Row>
            <Expander vertical size={6}>
              <Divider />
            </Expander>
          </Card.Content>
          <Card.Actions>
            <Row>
              <Expander />
              <Button>View More</Button>
            </Row>
          </Card.Actions>
        </Card>
        <Expander vertical size={20} />
        <Text h1>Loans</Text>
        <Expander vertical size={10} />
        <Card>
          <Card.Content>
            <Row>
              <Expander>
                <DataGroup label="Funds Received" value="S$0.00" />
              </Expander>
              <Expander>
                <DataGroup label="Outstanding Amount" value="S$0.00" />
              </Expander>
            </Row>
            <Expander vertical size={6}>
              <Divider />
            </Expander>
          </Card.Content>
          <Card.Actions>
            <Row>
              <Expander />
              <Button>View More</Button>
            </Row>
          </Card.Actions>
        </Card>
        <Expander vertical size={10} />
        <Text h1>RazerPeers</Text>
        <Expander vertical size={10} />
        <Card>
          <Card.Content>
            <Row>
              <Expander>
                <DataGroup label="Funds Received" value="S$1,200" />
              </Expander>
              <Expander>
                <DataGroup label="Outstanding Amount" value="S$0.00" />
              </Expander>
            </Row>
            <Expander vertical size={6}>
              <Divider />
            </Expander>
          </Card.Content>
          <Card.Actions>
            <Row>
              <Button icon="chat" color="red">
                Chat Pending
              </Button>
              <Expander />
              <Button>View More</Button>
            </Row>
          </Card.Actions>
        </Card>
      </Expander>
      <Expander vertical size={40} />
    </ScrollView>
  );
};
