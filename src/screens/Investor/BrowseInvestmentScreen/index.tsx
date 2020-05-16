import React, { useState } from "react";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native";
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
import { RouteProp } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { RootStackParamList, Route } from "@common/Route";

import { BrowseInvestmentScreenContainer } from "./BrowseInvestmentScreenContainer";
import { ScreenHeader } from "@components/ScreenHeader";
import { PerformanceTab } from "../PerformanceAccountsScreen/PerformanceTab";
import { AccountTab } from "../PerformanceAccountsScreen/AccountTab";
import { InvestedTab } from "./InvestedTab";
import { OngoingTab } from "./OngoingTab";

interface HomeScreenProps {
  navigation: StackNavigationProp<
    RootStackParamList,
    Route.InvestorBrowseInvestment
  >;
  route: RouteProp<RootStackParamList, Route.InvestorBrowseInvestment>;
}

export const BrowseInvestmentScreen: React.FunctionComponent<HomeScreenProps> = ({
  navigation,
  route,
}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "ongoing" },
    { key: "second", title: "invested" },
  ]);
  const renderScene = SceneMap({
    first: () => (
      <OngoingTab
        navigateToCard={(cardProps) =>
          navigation.navigate(Route.InvestorSmeDetails, cardProps)
        }
      />
    ),
    second: () => (
      <InvestedTab
        navigateToCard={(cardProps) =>
          navigation.navigate(Route.InvestorSmeDetails, cardProps)
        }
      />
    ),
  });
  const initialLayout = { width: Dimensions.get("window").width };

  return (
    <BrowseInvestmentScreenContainer>
      <ScreenHeader title="Browse Investment" onBack={() => navigation.pop()} />
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
            style={{ backgroundColor: "transparent", elevation: 0 }}
          />
        )}
      />
    </BrowseInvestmentScreenContainer>
  );
};
