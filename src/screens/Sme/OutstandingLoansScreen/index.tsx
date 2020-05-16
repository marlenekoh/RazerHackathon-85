import React, { useState } from "react";
import { RootStackParamList, Route } from "@common/Route";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { ScreenHeader } from "@components/ScreenHeader";
import { Expander } from "@components/Expander";
import { Text } from "@components/Text";
import { Center } from "@components/Center";
import { Button, Card, TextInput } from "react-native-paper";
import { Row } from "@components/Row";
import { DataGroup } from "@components/DataGroup";
import { Divider } from "@components/Divider";

interface OutstandingLoansScreenProps {
  navigation: StackNavigationProp<
    RootStackParamList,
    Route.SmeOutstandingLoans
  >;
  route: RouteProp<RootStackParamList, Route.SmeOutstandingLoans>;
}

export const OutstandingLoansScreen: React.FunctionComponent<OutstandingLoansScreenProps> = ({
  navigation,
  route,
}) => {
  const [loanSelected, setLoanSelected] = useState(false);
  const [value, setValue] = useState("");
  const Default = (
    <>
      <Expander size={20}>
        <Text>Hey Name,</Text>
        <Text h4>
          You have{" "}
          <Text h4 color="blue">
            3
          </Text>{" "}
          loan/s outstanding:
        </Text>
        <Expander vertical size={30} />
      </Expander>
      <Expander vertical size={20} />
      <Center>
        <Text h1>S$300.00</Text>
        <Text h3>Outstanding Amount This Month</Text>
      </Center>
      <Expander vertical size={20} />
      <Expander size={20}>
        <Card onPress={() => setLoanSelected(true)}>
          <Card.Content>
            <Row>
              <Text h3>Raymond B.</Text>
              <Expander />
              <Text h3>2/12 period</Text>
            </Row>
            <Text>Singapore</Text>
            <Expander vertical size={30} />
            <Text p2>
              Overdue in <Text color="red">4</Text> day/s
            </Text>
            <Row>
              <Text h3>S$100.00*</Text>
              <Expander />
              <Button style={{ marginRight: -14 }}>Repayment</Button>
            </Row>
          </Card.Content>
        </Card>
        <Expander vertical size={12} />
        <Card onPress={() => setLoanSelected(true)}>
          <Card.Content>
            <Row>
              <Text h3>Meryl C.</Text>
              <Expander />
              <Text h3>11/12 period</Text>
            </Row>
            <Text>Singapore</Text>
            <Expander vertical size={30} />
            <Text p2>
              Overdue in <Text color="red">4</Text> day/s
            </Text>
            <Row>
              <Text h3>S$100.00*</Text>
              <Expander />
              <Button style={{ marginRight: -14 }}>Repayment</Button>
            </Row>
          </Card.Content>
        </Card>
        <Expander vertical size={12} />
        <Card onPress={() => setLoanSelected(true)}>
          <Card.Content>
            <Row>
              <Text h3>Gary N.</Text>
              <Expander />
              <Text h3>6/12 period</Text>
            </Row>
            <Text>Singapore</Text>
            <Expander vertical size={30} />
            <Text p2>
              Overdue in <Text color="red">4</Text> day/s
            </Text>
            <Row>
              <Text h3>S$100.00*</Text>
              <Expander />
              <Button style={{ marginRight: -14 }}>Repayment</Button>
            </Row>
          </Card.Content>
        </Card>
        <Expander vertical size={30} />
      </Expander>
    </>
  );

  const LoanSelected = (
    <>
      <Expander size={20}>
        <Card>
          <Card.Content>
            <Row>
              <Text h3>Gary N.</Text>
              <Expander />
              <Text h3>6/12 period</Text>
            </Row>
            <Text>Singapore</Text>
            <Expander vertical size={30} />
            <Text p2>Beore due date 20 day/s</Text>
            <Row>
              <Text h3>S$100.00*</Text>
              <Expander />
              <Text h3>Due on 10 June 2020</Text>
            </Row>
            <Expander vertical size={30} />
            <Row>
              <Expander>
                <DataGroup label="Principal Amount" value="S$1,200" />
              </Expander>
              <Expander>
                <DataGroup label="Maturity Date" value="10 June 2021" />
              </Expander>
            </Row>
            <Expander vertical size={8}>
              <Divider />
            </Expander>
            <Row>
              <Expander>
                <DataGroup label="Interest Payment Due" value="S$100" />
              </Expander>
              <Expander>
                <DataGroup label="Due Date" value="10 June 2020" />
              </Expander>
            </Row>
          </Card.Content>
        </Card>
        <Card style={{ backgroundColor: "lightgray" }}>
          <Card.Content>
            <Text h3>Repayment Amount (SGD)</Text>
            <Row>
              <Text h1>S$</Text>
              <TextInput
                keyboardType="numeric"
                value={value}
                onChangeText={(text) => setValue(text)}
                placeholder="0.00"
                style={{ flex: 1 }}
              />
            </Row>
            <Expander vertical size={12} />
            <Text>
              Default interest amount will automatically be repaid via RazerPay
              on 10 June 2020.
            </Text>
          </Card.Content>
        </Card>
        <Expander vertical size={12} />
        <Button mode="contained">Repay Now</Button>
      </Expander>
    </>
  );
  return (
    <>
      <ScreenHeader
        onBack={() => {
          loanSelected ? setLoanSelected(false) : navigation.pop();
        }}
        title="loans"
      />
      <ScrollView>
        <Expander vertical size={30} />
        {loanSelected ? LoanSelected : Default}
      </ScrollView>
    </>
  );
};
