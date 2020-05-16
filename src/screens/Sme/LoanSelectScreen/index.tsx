import React, { useState } from "react";
import { RootStackParamList, Route } from "@common/Route";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenHeader } from "@components/ScreenHeader";
import { Expander } from "@components/Expander";
import { Text } from "@components/Text";
import { Button, Card, TextInput, ProgressBar } from "react-native-paper";
import { View, ScrollView, FlatList } from "react-native";
import { Row } from "@components/Row";
import { LoansScreenContainer } from "./LoansScreenContainer";
import { DataGroup } from "@components/DataGroup";
import { Divider } from "@components/Divider";
import { Center } from "@components/Center";

interface LoanSelectScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.SmeLoanSelect>;
  route: RouteProp<RootStackParamList, Route.SmeLoanSelect>;
}

export const LoanSelectScreen: React.FunctionComponent<LoanSelectScreenProps> = ({
  navigation,
  route,
}) => {
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState(false);

  return (
    <LoansScreenContainer>
      <ScreenHeader
        title="loans"
        onBack={() => {
          navigation.pop();
        }}
      />
      <ScrollView>
        <Expander size={20}>
          {confirm ? (
            <>
              <Text>Hey Name,</Text>
              <Text h4>
                You have <Text color="blue">1</Text> loan/s outstanding:
              </Text>
              <Expander vertical size={30} />
              <Card>
                <Card.Content>
                  <Row>
                    <Text h3>Syndicated Loan</Text>
                    <Expander />
                    <Text h3>1/12 period</Text>
                  </Row>
                  <Text>Singapore</Text>
                  <Expander vertical size={30}>
                    <Text p2>Before due date 4 day/s</Text>
                    <Row>
                      <Text h3>S$2,500*</Text>
                      <Expander />
                      <Text>Due on 20 May 2020</Text>
                    </Row>
                  </Expander>
                  <Row>
                    <Expander>
                      <DataGroup label="Principal Amount" value="S$30,000" />
                    </Expander>
                    <Expander>
                      <DataGroup label="Maturity Date" value="20 May 2021" />
                    </Expander>
                  </Row>
                  <Divider />
                  <Row>
                    <Expander>
                      <DataGroup label="Interest Payment Due" value="S$2,500" />
                    </Expander>
                    <Expander>
                      <DataGroup label="Due Date" value="20 May 2020" />
                    </Expander>
                  </Row>
                </Card.Content>
              </Card>
              <Card style={{ backgroundColor: "lightgray" }}>
                <Card.Content>
                  <Expander vertical size={20} />
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
                    Default interest amount will automatically be repaid via
                    RazerPay on 20 May 2020.
                  </Text>
                </Card.Content>
              </Card>
              <Expander vertical size={12} />
              <Button mode="contained">Repay Now</Button>
            </>
          ) : (
            <>
              <Text>Hey Name,</Text>
              <Text h4>You chose this loan:</Text>
              <Expander vertical size={30} />
              <Card>
                <Card.Content>
                  <Row>
                    <Text h3>Syndicated Loan</Text>
                    <Expander />
                    <Text h3>@ 10.4% p.a.</Text>
                  </Row>
                  <Text>Singapore</Text>
                  <Expander vertical size={12} />
                  <Text>
                    <Text h5 color="blue">
                      100%
                    </Text>{" "}
                    of <Text h5>loan proposal funded</Text>
                  </Text>
                  <ProgressBar progress={1} />
                  <Expander vertical size={12} />
                  <Text>DBS & Standard Chartered split</Text>
                </Card.Content>
              </Card>
              <Expander vertical size={12} />
              <Card>
                <Card.Content>
                  <Row>
                    <Expander>
                      <DataGroup label="Funded" value="500K" />
                    </Expander>
                    <Expander>
                      <DataGroup label="Goal" value="500K" />
                    </Expander>
                  </Row>
                  <Divider />
                  <Row>
                    <Expander>
                      <DataGroup label="Per annum" value="10.4%" />
                    </Expander>
                    <Expander>
                      <DataGroup label="Month" value="12" />
                    </Expander>
                  </Row>
                </Card.Content>
              </Card>
              <Expander vertical size={12} />

              <Card>
                <Card.Content>
                  <Text h3>Breakdown of Loan</Text>
                </Card.Content>
              </Card>
              <Expander vertical size={12} />

              <Card>
                <Card.Content>
                  <Row>
                    <Expander>
                      <DataGroup label="Bank" value="DBS" />
                    </Expander>
                    <Expander>
                      <DataGroup label="Funded" value="400K" />
                    </Expander>
                  </Row>
                  <Divider />
                  <Row>
                    <Expander>
                      <DataGroup label="Per annum" value="10%" />
                    </Expander>
                    <Expander>
                      <DataGroup label="Month" value="12" />
                    </Expander>
                  </Row>
                  <Expander vertical size={20} />
                  <Row>
                    <Expander>
                      <DataGroup label="Bank" value="Standard Chartered" />
                    </Expander>
                    <Expander>
                      <DataGroup label="Funded" value="100K" />
                    </Expander>
                  </Row>
                  <Divider />
                  <Row>
                    <Expander>
                      <DataGroup label="Per annum" value="12%" />
                    </Expander>
                    <Expander>
                      <DataGroup label="Month" value="12" />
                    </Expander>
                  </Row>
                </Card.Content>
              </Card>
              <Expander vertical size={12} />
              <Button mode="contained" onPress={() => setConfirm(true)}>
                Confirm & Process Loan
              </Button>
            </>
          )}
        </Expander>
        <Expander vertical size={30} />
      </ScrollView>
    </LoansScreenContainer>
  );
};
