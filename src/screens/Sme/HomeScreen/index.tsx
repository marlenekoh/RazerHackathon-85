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
import { View, Dimensions } from "react-native";
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
import { FundingTab } from "./FundingTab";
import { DigitalisationTab } from "./DigitalisationTab";

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.SmeHome>;
  route: RouteProp<RootStackParamList, Route.SmeHome>;
}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({
  navigation,
  route,
}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "funding" },
    { key: "second", title: "digitalisation" },
  ]);
  const renderScene = SceneMap({
    first: () => <FundingTab />,
    second: () => <DigitalisationTab />,
  });
  const initialLayout = { width: Dimensions.get("window").width };

  return (
    <HomeScreenContainer>
      <IconButton icon="menu" onPress={() => {}} />
      <Center>
        <Avatar.Image
          source={{
            uri:
              "https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png",
          }}
          size={70}
        />
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
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{
              backgroundColor: "black",
              borderWidth: 2,
            }}
            renderLabel={({ route, focused }) => (
              <Text h5 color={focused ? "black" : "gray"}>
                {route.title}
              </Text>
            )}
            style={{ backgroundColor: "#f7f7f7", elevation: 0 }}
          />
        )}
      />
    </HomeScreenContainer>
  );
};
