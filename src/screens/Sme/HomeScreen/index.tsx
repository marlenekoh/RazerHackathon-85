import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Avatar,
  IconButton,
  ProgressBar,
  Chip,
} from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { RootStackParamList, Route } from "@common/Route";
import { HomeScreenContainer } from "./HomeScreenContainer";
import { Center } from "@components/Center";
import { Row } from "@components/Row";
import { Divider } from "@components/Divider";
import { View } from "react-native";
import { FundingTab } from "./FundingTab";
import { DigitalisationTab } from "./DigitalisationTab";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HorizontalTabs } from "@components/HorizontalTabs";

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.SmeHome>;
  route: RouteProp<RootStackParamList, Route.SmeHome>;
}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <HomeScreenContainer>
      <IconButton icon="menu" onPress={() => {}} />
      <Center>
        <TouchableOpacity onPress={() => navigation.navigate(Route.SmeProfile)}>
          <Avatar.Image
            source={{
              uri:
                "https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png",
            }}
            size={70}
          />
        </TouchableOpacity>
        <Text p1>Hi (Really Long Name) from</Text>
        <Text h2>Really Long Company Name</Text>
      </Center>
      <Expander vertical size={12} />
      <Card>
        <Card.Content>
          <Center>
            <Text>This is what you have:</Text>
            <Text h1>S$30,000.00</Text>
            <Expander size={12}>
              <ProgressBar progress={0.6} />
            </Expander>
            <Expander vertical size={8} />
          </Center>
          <Expander vertical size={8} />
          <Expander size={12}>
            <Text p2>
              <Text p2 color="blue">
                60%
              </Text>{" "}
              of goal amount obtained!
            </Text>
            <ProgressBar progress={60 / 100} />
            <Expander vertical size={20} />
            <Row>
              <View>
                <Text h5>Digitalisation Status</Text>
                <Text p2>Complete any 4 to get bonus $$!</Text>
              </View>
              <Expander />
              <IconButton
                icon="checkbox-marked-circle"
                size={25}
                style={{ marginRight: -2 }}
                color="blue"
              />
              <IconButton
                icon="checkbox-blank-circle-outline"
                size={25}
                style={{
                  marginRight: -2,
                  marginLeft: -2,
                }}
                color="blue"
              />
              <IconButton
                icon="checkbox-blank-circle-outline"
                size={25}
                style={{ marginRight: -2, marginLeft: -2 }}
                color="blue"
              />
              <IconButton
                icon="gift"
                size={25}
                style={{
                  marginRight: -2,
                  marginLeft: -2,
                }}
                color="red"
              />
            </Row>
          </Expander>
        </Card.Content>
      </Card>
      <Expander vertical size={12} />
      <HorizontalTabs
        tab1={{
          title: "funding",
          component: () => (
            <FundingTab
              navigateToGrants={() => navigation.navigate(Route.SmeGrants)}
              navigateToLoans={() => navigation.navigate(Route.SmeLoans)}
              navigateToRazerPeer={() =>
                navigation.navigate(Route.SmeRazerPeer)
              }
            />
          ),
        }}
        tab2={{
          title: "digitalisation",
          component: () => (
            <DigitalisationTab
              navigateToDigitalisationDetails={(props) =>
                navigation.navigate(Route.SmeDigitalisationDetails, props)
              }
            />
          ),
        }}
      />
    </HomeScreenContainer>
  );
};
