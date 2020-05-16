import React from "react";
import { Avatar, IconButton } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native";

import { RootStackParamList, Route } from "@common/Route";
import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { Divider } from "@components/Divider";
import { Row } from "@components/Row";

import { ContentContainer } from "./ContentContainer";
import { SubContentContainer } from "./SubContentContainer";
import { Section } from "./Section";
import { DataGroup } from "@components/DataGroup";
import { ScreenContainer } from "@components/ScreenContainer";
import { Color } from "@common/Color";

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.InvestorHome>;
  route: RouteProp<RootStackParamList, Route.InvestorHome>;
}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <ScreenContainer>
      <ScrollView>
        <Row>
          <Expander />
          <IconButton icon="bell" color={Color.Highlight1} onPress={() => {}} />
        </Row>
        <ContentContainer>
          <Avatar.Image
            source={{
              uri:
                "https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png",
            }}
            size={70}
          />
          <Text h2>Hi (Really Long Name)</Text>
          <Text p1>here's how you're doing:</Text>
          <Expander vertical size={30}>
            <ContentContainer>
              <Text h1>8.44%</Text>
              <Text p1>Annualized Return</Text>
            </ContentContainer>
          </Expander>
          <Row>
            <Expander>
              <SubContentContainer>
                <Text h5>$3,150.00</Text>
                <Text p1 align="center">
                  Expected Returns This Month
                </Text>
              </SubContentContainer>
            </Expander>
            <Divider vertical length={80} />
            <Expander>
              <SubContentContainer>
                <Text h5>$1,150.00</Text>
                <Text p1 align="center">
                  Outstanding Amount This Month
                </Text>
              </SubContentContainer>
            </Expander>
          </Row>
        </ContentContainer>
        <Expander vertical size={40}>
          <Section
            title="Performance & Account"
            content={
              <Row>
                <Expander>
                  <DataGroup label="Net Income" value="S$0.00" />
                </Expander>
                <Expander>
                  <DataGroup label="Account Balance" value="S$0.00" />
                </Expander>
              </Row>
            }
            onCardPress={() => {
              navigation.navigate(Route.InvestorPerformanceAccount);
            }}
            onViewMore={() => {
              navigation.navigate(Route.InvestorPerformanceAccount);
            }}
          />
          <Expander vertical size={30} />
          <Section
            title="Browse Investment"
            content={
              <Row>
                <Expander>
                  <DataGroup label="Funds Invested" value="S$30,000" />
                </Expander>
                <Expander>
                  <DataGroup label="Deals Ongoing" value="2" />
                </Expander>
              </Row>
            }
            onCardPress={() => {
              navigation.navigate(Route.InvestorBrowseInvestment);
            }}
            onViewMore={() => {
              navigation.navigate(Route.InvestorBrowseInvestment);
            }}
          />
          <Expander vertical size={30} />
          <Section
            title="Auto-Investment"
            content={
              <Row>
                <Expander>
                  <DataGroup label="Returns" value="S$0.00" />
                </Expander>
                <Expander>
                  <DataGroup label="Current Value" value="S$0.00" />
                </Expander>
              </Row>
            }
          />
        </Expander>
      </ScrollView>
    </ScreenContainer>
  );
};
