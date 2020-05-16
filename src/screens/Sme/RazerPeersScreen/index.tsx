import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList, Route } from "@common/Route";
import { ScreenHeader } from "@components/ScreenHeader";
import { Text } from "@components/Text";
import { Row } from "@components/Row";
import { Center } from "@components/Center";
import { Expander } from "@components/Expander";
import { Divider } from "@components/Divider";
import { Card, Button, IconButton } from "react-native-paper";
import { ScrollView } from "react-native";
import { ScreenContainer } from "@components/ScreenContainer";
import { Color } from "@common/Color";

interface RazerPeerScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.SmeGrants>;
  route: RouteProp<RootStackParamList, Route.SmeGrants>;
}

export const RazerPeerScreen: React.FunctionComponent<RazerPeerScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <ScreenContainer>
      <ScreenHeader title="RazerPeer" onBack={() => navigation.pop()} />
      <ScrollView>
        <Row>
          <Expander>
            <Center>
              <Text h5>$3,600.00</Text>
              <Text>Funds Raised</Text>
              <Text
                underline
                color={Color.Highlight1}
                onPress={() => navigation.navigate(Route.SmeFundsRaised)}
              >
                View Details
              </Text>
            </Center>
          </Expander>
          <Divider vertical length={80} />
          <Expander>
            <Expander size={25}>
              <Center>
                <Text h5>$300.00</Text>
                <Text align="center">Outstanding Amount this Month</Text>
              </Center>
            </Expander>
          </Expander>
        </Row>
        <Expander vertical size={20} />
        <Expander size={18}>
          <Card
            style={{ backgroundColor: Color.Foreground1 }}
            onPress={() => navigation.navigate(Route.SmeOutstandingLoans)}
          >
            <Card.Content>
              <Row>
                <Text h2>Loan Repayment</Text>
                <Expander />
                <IconButton color={Color.TextPrimary} icon="arrow-right" />
              </Row>
              <Text>
                You have <Text h5>3</Text> loan/s outstanding this month.
              </Text>
              <Expander vertical size={16} />
            </Card.Content>
          </Card>
          <Expander vertical size={16}>
            <Row>
              <Expander size={14} />
              <Text h2>Chat with Investor/s</Text>
              <IconButton color={Color.Highlight1} icon="chat" />
            </Row>
          </Expander>
          <Card style={{ backgroundColor: Color.Foreground1 }}>
            <Card.Content>
              <Row>
                <Text h2>Lucy A.</Text>
                <Expander />
                <Text color={Color.Highlight2}>New Message</Text>
                <IconButton
                  icon="checkbox-blank-circle"
                  size={12}
                  color={Color.Highlight2}
                  style={{ marginLeft: 2, marginRight: 0 }}
                />
              </Row>
              <Text>15 May 2020, 21:09</Text>
            </Card.Content>
            <Card.Actions>
              <Row>
                <Expander />
                <Button labelStyle={{ color: Color.Highlight1 }}>
                  View Message
                </Button>
              </Row>
            </Card.Actions>
          </Card>
          <Expander vertical size={12} />
          <Card style={{ backgroundColor: Color.Foreground1 }}>
            <Card.Content>
              <Row>
                <Text h2>Gary N.</Text>
                <Expander />
                <Text color={Color.Highlight2}>New Message</Text>
                <IconButton
                  icon="checkbox-blank-circle"
                  size={12}
                  color={Color.Highlight2}
                  style={{ marginLeft: 2, marginRight: 0 }}
                />
              </Row>
              <Text>15 May 2020, 21:09</Text>
            </Card.Content>
            <Card.Actions>
              <Row>
                <Expander />
                <Button labelStyle={{ color: Color.Highlight1 }}>
                  View Message
                </Button>
              </Row>
            </Card.Actions>
          </Card>
          <Expander vertical size={12} />
          <Card style={{ backgroundColor: Color.Foreground1 }}>
            <Card.Content>
              <Row>
                <Text h2>Meryl C.</Text>
                <Expander />
              </Row>
              <Text>12 May 2020, 23:44</Text>
            </Card.Content>
            <Card.Actions>
              <Row>
                <Expander />
                <Button labelStyle={{ color: Color.Highlight1 }}>
                  View Message
                </Button>
              </Row>
            </Card.Actions>
          </Card>
        </Expander>
        <Expander vertical size={30} />
      </ScrollView>
    </ScreenContainer>
  );
};
