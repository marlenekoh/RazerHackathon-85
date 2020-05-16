import React, { useState } from "react";
import { RootStackParamList, Route } from "@common/Route";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text } from "@components/Text";
import { ScreenHeader } from "@components/ScreenHeader";
import { HorizontalTabs } from "@components/HorizontalTabs";
import { Expander } from "@components/Expander";
import {
  Searchbar,
  Button,
  Card,
  IconButton,
  Chip,
  List,
} from "react-native-paper";
import { ScrollView } from "react-native";
import { Row } from "@components/Row";
import { ScreenContainer } from "@components/ScreenContainer";
import { Color } from "@common/Color";

interface GrantLoansScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.SmeGrantLoans>;
  route: RouteProp<RootStackParamList, Route.SmeGrantLoans>;
}

export const GrantLoansScreen: React.FunctionComponent<GrantLoansScreenProps> = ({
  navigation,
  route,
}) => {
  const { applied, approved } = route.params;

  return (
    <ScreenContainer>
      <ScreenHeader title="loans" onBack={() => navigation.pop()} />
      <ScrollView>
        <Expander size={20}>
          <Expander vertical size={20} />
          <Text>Hey Name,</Text>
          <Text h4>You chose this grant/s:</Text>
          <Expander vertical size={30} />
          <Card style={{ backgroundColor: Color.Foreground1 }}>
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
                  Applicable
                </Chip>
                <Expander />
              </Row>
              <Expander vertical size={12} />
              <Row>
                <Text h3>S$30,000*</Text>
                <Expander />
              </Row>
              <Expander vertical size={12} />
            </Card.Content>
            {applied && (
              <Card.Actions style={{ backgroundColor: Color.Foreground3 }}>
                <Text>
                  You applied for this grant on <Text h5>16 May 2020</Text>.
                </Text>
              </Card.Actions>
            )}
          </Card>
          <Expander vertical size={20} />
          <List.Accordion
            title="Overview"
            theme={{
              colors: {
                text: Color.TextPrimary,
                primary: Color.Highlight1,
              },
            }}
            style={{ backgroundColor: Color.Foreground1 }}
          >
            <Card style={{ backgroundColor: Color.Foreground1 }}>
              <Card.Content>
                <Text>
                  Small and medium enterprises (SMEs) will receive an
                  international boost with the Market Readiness Assistance (MRA)
                  grant to help take your business overseas. Eligible SMEs will
                  receive the following support:{"\n"}
                </Text>
                <Row alignItems="flex-start">
                  <Text>{"\u25AA "}</Text>
                  <Text>
                    Up to 70% of eligible costs, capped at S$100,000 per company
                    per new market* from 1 April 2020 to 31 March 2023 that
                    covers:{"\n"}
                  </Text>
                </Row>
                <Row alignItems="flex-start">
                  <Expander size={18} />
                  <Text>{"\u25AB "}</Text>
                  <Text wrap>
                    Overseas market promotion (capped at S$20,000)
                  </Text>
                </Row>
                <Row alignItems="flex-start">
                  <Expander size={18} />
                  <Text>{"\u25AB "}</Text>
                  <Text wrap>
                    Overseas business development (capped at S$50,000)
                  </Text>
                </Row>
                <Row alignItems="flex-start">
                  <Expander size={18} />
                  <Text>{"\u25AB "}</Text>
                  <Text wrap>Overseas market set-up (capped at S$30,000)</Text>
                </Row>
              </Card.Content>
            </Card>
          </List.Accordion>
          <Expander vertical size={20} />
          <List.Accordion
            title="Eligibility"
            theme={{
              colors: { text: Color.TextPrimary, primary: Color.Highlight1 },
            }}
            style={{ backgroundColor: Color.Foreground1 }}
          >
            <Card style={{ backgroundColor: Color.Foreground1 }}>
              <Card.Content>
                <Text>Eligibility</Text>
              </Card.Content>
            </Card>
          </List.Accordion>
          <Expander vertical size={20} />
          <List.Accordion
            title="Claims"
            theme={{
              colors: { text: Color.TextPrimary, primary: Color.Highlight1 },
            }}
            style={{ backgroundColor: Color.Foreground1 }}
          >
            <Card style={{ backgroundColor: Color.Foreground1 }}>
              <Card.Content>
                <Text>Claims</Text>
              </Card.Content>
            </Card>
          </List.Accordion>
          <Expander vertical size={20} />
          <List.Accordion
            title="FAQs"
            theme={{
              colors: { text: Color.TextPrimary, primary: Color.Highlight1 },
            }}
            style={{ backgroundColor: Color.Foreground1 }}
          >
            <Card style={{ backgroundColor: Color.Foreground1 }}>
              <Card.Content>
                <Text>FAQs</Text>
              </Card.Content>
            </Card>
          </List.Accordion>
          <Expander vertical size={20} />
          <List.Accordion
            title="Apply"
            theme={{
              colors: { text: Color.Highlight1, primary: Color.Highlight1 },
            }}
            style={{ backgroundColor: Color.Foreground1 }}
            titleStyle={{ fontWeight: "bold" }}
          >
            <Card style={{ backgroundColor: Color.Foreground1 }}>
              <Card.Content>
                <Text h5>Pre-Application</Text>
                <Text>
                  Please note that retrospective applications will not be
                  accepted. An application will be deemed retrospective only if
                  any of the following events took place before the application
                  date: Signed an engagement letter with the third-party
                  consultant Made the first payment to the third-party
                  consultant Commenced the project with the third-party
                  consultant Companies must submit your applications no earlier
                  than six months of project start date.
                </Text>
              </Card.Content>
            </Card>
          </List.Accordion>
          <Expander vertical size={20} />
          <Button mode="contained" color={Color.HighlightDisabled}>
            {applied ? "Applied for Grant" : "Apply for Grant"}
          </Button>
        </Expander>
        <Expander vertical size={30} />
      </ScrollView>
    </ScreenContainer>
  );
};
