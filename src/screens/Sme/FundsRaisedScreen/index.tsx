import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Route } from "@common/Route";
import { Expander } from "@components/Expander";
import { Text } from "@components/Text";
import { ScreenHeader } from "@components/ScreenHeader";
import { Center } from "@components/Center";
import { Card, Button } from "react-native-paper";
import { Row } from "@components/Row";
import { ScrollView } from "react-native";
import { ScreenContainer } from "@components/ScreenContainer";
import { Color } from "@common/Color";

interface FundsRaisedScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.SmeFundsRaised>;
  route: RouteProp<RootStackParamList, Route.SmeFundsRaised>;
}

export const FundsRaisedScreen: React.FunctionComponent<FundsRaisedScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <ScreenContainer>
      <ScreenHeader title="loans" onBack={() => navigation.pop()} />
      <ScrollView>
        <Expander vertical size={20} />
        <Expander size={20}>
          <Text>Hey Name,</Text>
          <Text h4>
            You have{" "}
            <Text h4 color={Color.Highlight1}>
              3
            </Text>{" "}
            investor/s:
          </Text>
          <Expander vertical size={30} />
          <Center>
            <Text h1>$3,600.00</Text>
            <Text h3>Funds Raised</Text>
          </Center>
        </Expander>
        <Expander vertical size={30} />
        <Expander size={20}>
          <Card style={{ backgroundColor: Color.Foreground1 }}>
            <Card.Content>
              <Row>
                <Text h3>Raymond B.</Text>
                <Expander />
                <Text h3>2/12 period</Text>
              </Row>
              <Text>Singapore</Text>
              <Expander vertical size={30} />
              <Row>
                <Text h3>S$1,200.00*</Text>
                <Expander />
                <Button color={Color.Highlight1} style={{ marginRight: -14 }}>
                  Start Messaging
                </Button>
              </Row>
            </Card.Content>
          </Card>
          <Expander vertical size={12} />
          <Card style={{ backgroundColor: Color.Foreground1 }}>
            <Card.Content>
              <Row>
                <Text h3>Meryl C.</Text>
                <Expander />
                <Text h3>11/12 period</Text>
              </Row>
              <Text>Singapore</Text>
              <Expander vertical size={30} />
              <Row>
                <Text h3>S$1,200.00*</Text>
                <Expander />
                <Button color={Color.Highlight1} style={{ marginRight: -14 }}>
                  Start Messaging
                </Button>
              </Row>
            </Card.Content>
          </Card>
          <Expander vertical size={12} />
          <Card style={{ backgroundColor: Color.Foreground1 }}>
            <Card.Content>
              <Row>
                <Text h3>Gary N.</Text>
                <Expander />
                <Text h3>6/12 period</Text>
              </Row>
              <Text>Singapore</Text>
              <Expander vertical size={30} />
              <Row>
                <Text h3>S$1,200.00*</Text>
                <Expander />
                <Button color={Color.Highlight1} style={{ marginRight: -14 }}>
                  Start Messaging
                </Button>
              </Row>
            </Card.Content>
          </Card>
        </Expander>
        <Expander vertical size={30} />
      </ScrollView>
    </ScreenContainer>
  );
};
