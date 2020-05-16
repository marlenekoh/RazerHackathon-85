import React, { useState } from "react";
import { Dimensions } from "react-native";
import { IconButton } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { RootStackParamList, Route } from "@common/Route";
import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { Row } from "@components/Row";

import { PerformanceAccountScreenContainer } from "./PerformanceAccountScreenContainer";
import { PerformanceTab } from "./PerformanceTab";

interface PerformanceAccountScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.PerformanceAccount>;
  route: RouteProp<RootStackParamList, Route.PerformanceAccount>;
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
    second: () => <Text>Second Route</Text>,
  });
  const initialLayout = { width: Dimensions.get("window").width };

  return (
    <PerformanceAccountScreenContainer>
      <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
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
            renderLabel={({ route, focused }) => <Text h5>{route.title}</Text>}
            style={{ backgroundColor: "transparent", elevation: 0 }}
          />
        )}
      />
    </PerformanceAccountScreenContainer>
  );
};
