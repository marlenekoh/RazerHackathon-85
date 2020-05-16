import React, { useState } from "react";
import { Dimensions } from "react-native";
import { IconButton } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { Row } from "@components/Row";
import { RootStackParamList, Route } from "@common/Route";
import { Expander } from "@components/Expander";
import { Text } from "@components/Text";
import { Center } from "@components/Center";

import { PerformanceAccountScreenContainer } from "./PerformanceAccountScreenContainer";
import { PerformanceTab } from "./PerformanceTab";
import { AccountTab } from "./AccountTab";
import { ScreenHeader } from "@components/ScreenHeader";

interface PerformanceAccountScreenProps {
  navigation: StackNavigationProp<
    RootStackParamList,
    Route.InvestorPerformanceAccount
  >;
  route: RouteProp<RootStackParamList, Route.InvestorPerformanceAccount>;
}

export const PerformanceAccountScreen: React.FunctionComponent<PerformanceAccountScreenProps> = ({
  navigation,
  route,
}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "performance" },
    { key: "second", title: "account" },
  ]);
  const renderScene = SceneMap({
    first: () => <PerformanceTab />,
    second: () => <AccountTab />,
  });
  const initialLayout = { width: Dimensions.get("window").width };

  return (
    <PerformanceAccountScreenContainer>
      <ScreenHeader
        onBack={() => navigation.pop()}
        title="Performance & Accounts"
      />
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
    </PerformanceAccountScreenContainer>
  );
};
