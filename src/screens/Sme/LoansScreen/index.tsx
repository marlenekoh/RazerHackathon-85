import React from "react";
import { RootStackParamList, Route } from "@common/Route";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenHeader } from "@components/ScreenHeader";
import { Expander } from "@components/Expander";
import { Text } from "@components/Text";
import { Button, Card, ProgressBar } from "react-native-paper";
import { View, FlatList } from "react-native";
import { Row } from "@components/Row";
import { LoansScreenContainer } from "./LoansScreenContainer";

interface LoansScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.SmeLoans>;
  route: RouteProp<RootStackParamList, Route.SmeLoans>;
}

export const LoansScreen: React.FunctionComponent<LoansScreenProps> = ({
  navigation,
  route,
}) => {
  const data = [
    {
      id: 1,
      company: "Standard Chartered",
      perAnnum: 12,
      funded: 90,
    },
    {
      id: 2,
      company: "Syndicated Loan",
      perAnnum: 10.4,
      funded: 100,
    },
    {
      id: 3,
      company: "DBS",
      perAnnum: 10,
      funded: 90,
    },
  ];

  return (
    <LoansScreenContainer>
      <ScreenHeader
        title="loans"
        onBack={() => {
          navigation.pop();
        }}
      />
      <Expander size={20}>
        <Text>Hey Name,</Text>
        <Text h4>
          Here are the loans provided by the bank based on your proposal:
        </Text>
        <Expander vertical size={30} />
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={data}
          renderItem={({ item }) => {
            const { company, perAnnum, funded } = item;
            return (
              <Card onPress={() => navigation.navigate(Route.SmeLoanSelect)}>
                <Card.Content>
                  <Row>
                    <Text h3>{company}</Text>
                    <Expander />
                    <Text h3>@ {perAnnum}% p.a.</Text>
                  </Row>
                  <Text>Singapore</Text>
                  <Expander vertical size={12} />
                  <Text>
                    <Text h5 color="blue">
                      {funded}%
                    </Text>{" "}
                    of <Text h5>loan proposal funded</Text>
                  </Text>
                  <ProgressBar progress={funded / 100} />
                </Card.Content>
                <Card.Actions>
                  <Expander />
                  <Button>Learn More</Button>
                </Card.Actions>
              </Card>
            );
          }}
          ItemSeparatorComponent={() => <Expander vertical size={12} />}
        />
      </Expander>
    </LoansScreenContainer>
  );
};
