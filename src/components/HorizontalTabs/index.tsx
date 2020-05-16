import React from "react";
import { useTabs } from "./useTabs";
import { TabView, TabBar } from "react-native-tab-view";
import { Text } from "@components/Text";
/**
 * Only supports 2 tabs for now
 */

interface HorizontalTabsProps {
  tab1: {
    title: string;
    component: React.FunctionComponent;
  };
  tab2: {
    title: string;
    component: React.FunctionComponent;
  };
}

export const HorizontalTabs: React.FunctionComponent<HorizontalTabsProps> = ({
  tab1,
  tab2,
}) => {
  const { index, routes, renderScene, setIndex, initialLayout } = useTabs(
    tab1,
    tab2
  );

  return (
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
  );
};
