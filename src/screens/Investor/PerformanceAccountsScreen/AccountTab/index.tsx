import React from "react";
import { ScrollView } from "react-native";
import { Card, Button, Chip } from "react-native-paper";

import { Divider } from "@components/Divider";
import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { Center } from "@components/Center";
import { DataRow } from "@components/DataRow";
import { Row } from "@components/Row";
import { Color } from "@common/Color";

export const AccountTab: React.FunctionComponent = () => {
  return (
    <ScrollView>
      <Expander vertical size={38} />
      <Center>
        <Text h1>S$0.00</Text>
        <Text p1>Account Balance</Text>
      </Center>
      <Expander vertical size={50} />
      <Expander size={18}>
        <Card style={{ backgroundColor: Color.Foreground1 }}>
          <Card.Content>
            <DataRow label="Total Deposit" value="S$0.00" />
            <DataRow label="Total Withdrawal" value="-S$0.00" />
            <Expander vertical size={6}>
              <Divider />
            </Expander>
            <DataRow label="Net Deposit" value="S$0.00" />
          </Card.Content>
        </Card>
        <Expander vertical size={40} />

        <Text h1>Transaction History</Text>
        <Expander vertical size={10} />
        <Card style={{ backgroundColor: Color.Foreground1 }}>
          <Card.Content>
            <DataRow label="16 May 2020, 16:28" value="S$420" />
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
                Deposit
              </Chip>
              <Expander />
            </Row>
            <Expander vertical size={12}>
              <Divider />
            </Expander>
            <DataRow label="15 May 2020, 07:52" value="-S$100" />
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
                Withdrawal
              </Chip>
              <Expander />
            </Row>
            <Expander vertical size={12}>
              <Divider />
            </Expander>
          </Card.Content>
          <Card.Actions>
            <Expander />
            <Button color={Color.Highlight1}>View All Transactions</Button>
          </Card.Actions>
        </Card>
      </Expander>
      <Expander vertical size={40} />
    </ScrollView>
  );
};
