import React from "react";
import { ScrollView } from "react-native";

import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { Center } from "@components/Center";
import { Row } from "@components/Row";
import { Divider } from "@components/Divider";
import { Card } from "react-native-paper";

import { DataRow } from "@components/DataRow";
import { DataGroup } from "@components/DataGroup";
import { Color } from "@common/Color";

export const PerformanceTab: React.FunctionComponent = () => {
  return (
    <ScrollView>
      <Expander vertical size={38} />
      <Center>
        <Text h1>8.44%</Text>
        <Text p1>Annualized Return</Text>
      </Center>
      <Expander vertical size={50}>
        <Row>
          <Expander>
            <Expander size={25}>
              <Center>
                <Text h5>$3,150.00</Text>
                <Text p1 align="center">
                  Expected Returns This Month
                </Text>
              </Center>
            </Expander>
          </Expander>
          <Divider vertical length={80} />
          <Expander>
            <Center>
              <Text h5>$1,150.00</Text>
              <Text p1 align="center">
                Outstanding Amount This Month
              </Text>
            </Center>
          </Expander>
        </Row>
      </Expander>
      <Expander size={18}>
        <Text h1>Income Summary</Text>
        <Expander vertical size={10} />
        <Card style={{ backgroundColor: Color.Foreground1 }}>
          <Card.Content>
            <DataRow bold label="Total Income" value="S$0.00" />
            <DataRow label="Interest Received" value="S$0.00" />
            <DataRow label="Early Repayment" value="S$0.00" />
            <DataRow label="Late Interest" value="S$0.00" />
            <Expander vertical size={6}>
              <Divider />
            </Expander>
            <DataRow bold label="Expenses" value="-S$0.00" />
            <DataRow label="Service Fee" value="-S$0.00" />
            <DataRow label="Tax" value="-S$0.00" />
            <Expander vertical size={6}>
              <Divider />
            </Expander>
            <DataRow bold label="Net Income" value="S$0.00" />
          </Card.Content>
        </Card>
      </Expander>
      <Expander vertical size={40} />
      <Expander size={18}>
        <Text h1>Funds Overview</Text>
        <Expander vertical size={10} />
        <Card style={{ backgroundColor: Color.Foreground1 }}>
          <Card.Content>
            <Row>
              <Expander>
                <DataGroup label="Investments" value="0" />
              </Expander>
              <Expander>
                <DataGroup label="Deals Ongoing" value="0" />
              </Expander>
            </Row>
            <Expander vertical size={6}>
              <Divider />
            </Expander>
            <Row>
              <Expander>
                <DataGroup label="Funds Invested" value="S$0.00" />
              </Expander>
              <Expander>
                <DataGroup label="Funds Received" value="S$0.00" />
              </Expander>
            </Row>
            <Expander vertical size={6}>
              <Divider />
            </Expander>
            <DataGroup label="Outstanding Principal" value="S$0.00" />
          </Card.Content>
        </Card>
      </Expander>
      <Expander vertical size={40} />
      <Expander size={18}>
        <Text h1>Default & Recovery</Text>
        <Expander vertical size={10} />
        <Card style={{ backgroundColor: Color.Foreground1 }}>
          <Card.Content>
            <DataGroup label="Principal Defaulted (i)" value="S$0.00" />
            <Row>
              <Expander size={40} />
              <DataGroup
                label="Default - In Recovery(i)"
                value="S$0.00"
                subtitle="0 investment/s"
              />
            </Row>
            <Row>
              <Expander size={40} />
              <DataGroup
                label="Default - Non-Recoverable (i)"
                value="S$0.00"
                subtitle="0 investment/s"
              />
            </Row>
          </Card.Content>
        </Card>
      </Expander>
      <Expander vertical size={30} />
    </ScrollView>
  );
};
