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
    <>
      <ScreenHeader title="loans" onBack={() => navigation.pop()} />
      <ScrollView>
        <Expander size={20}>
          <Expander vertical size={20} />
          <Text>Hey Name,</Text>
          <Text h4>you chose this grant/s:</Text>
          <Expander vertical size={30} />
          <Card>
            <Card.Content>
              <Text h3>Startup SG Founder Grant</Text>
              <Text>Singapore</Text>
              <Expander vertical size={12} />
              <Row>
                <Chip>Industry</Chip>
                <Expander />
              </Row>
              <Expander vertical size={12} />
              <Row>
                <Chip
                  mode="outlined"
                  style={{ borderColor: "blue", borderWidth: 2 }}
                  textStyle={{ color: "blue" }}
                >
                  Applicable
                </Chip>
                <Expander />
              </Row>
              <Expander vertical size={12} />
              <Row>
                <Text h3>s$30,000*</Text>
                <Expander />
              </Row>
              <Expander vertical size={12} />
            </Card.Content>
            {applied && (
              <Card.Actions style={{ backgroundColor: "lightgrey" }}>
                <Text>
                  You applied for this grant on <Text h5>16 May 2020</Text>.
                </Text>
              </Card.Actions>
            )}
          </Card>
          <Expander vertical size={20} />
          <List.Accordion title="Overview" style={{ backgroundColor: "white" }}>
            <Card>
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
            style={{ backgroundColor: "white" }}
          >
            <Card>
              <Card.Content>
                <Text>Eligibility</Text>
              </Card.Content>
            </Card>
          </List.Accordion>
          <Expander vertical size={20} />
          <List.Accordion title="Claims" style={{ backgroundColor: "white" }}>
            <Card>
              <Card.Content>
                <Text>Claims</Text>
              </Card.Content>
            </Card>
          </List.Accordion>
          <Expander vertical size={20} />
          <List.Accordion title="FAQs" style={{ backgroundColor: "white" }}>
            <Card>
              <Card.Content>
                <Text>FAQs</Text>
              </Card.Content>
            </Card>
          </List.Accordion>
          <Expander vertical size={20} />
          <List.Accordion
            title="Apply"
            titleStyle={{ fontWeight: "bold", color: "blue" }}
            style={{ backgroundColor: "white" }}
          >
            <Card>
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
          <Button mode="contained" disabled={applied}>
            {applied ? "Applied for Grant" : "Apply for Grant"}
          </Button>
        </Expander>
        <Expander vertical size={30} />
      </ScrollView>
    </>
  );
};
