import React from "react";
import { ScrollView } from "react-native";
import { Card, Button } from "react-native-paper";

import { Divider } from "@components/Divider";
import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { Center } from "@components/Center";
import { DataRow } from "../DataRow";

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
        <Card>
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

        <Text h1>Default & Recovery</Text>
        <Expander vertical size={10} />
        <Card>
          <Card.Content>
            <Expander vertical size={6}>
              <Divider />
            </Expander>
          </Card.Content>
          <Card.Actions>
            <Expander />
            <Button>View All Transactions</Button>
          </Card.Actions>
        </Card>
      </Expander>
    </ScrollView>
  );
};
