import React, { useState } from "react";
import { SceneMap } from "react-native-tab-view";
import { Dimensions } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { Text } from "@components/Text";
import { Color } from "@common/Color";
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
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: tab1.title },
    { key: "second", title: tab2.title },
  ]);
  const renderScene = SceneMap({
    first: tab1.component,
    second: tab2.component,
  });
  const initialLayout = { width: Dimensions.get("window").width };

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
            borderColor: Color.TextPrimary,
            borderWidth: 2,
          }}
          renderLabel={({ route, focused }) => (
            <Text h5 color={focused ? Color.TextPrimary : Color.TextSecondary}>
              {route.title}
            </Text>
          )}
          style={{ backgroundColor: Color.Foreground1, elevation: 0 }}
        />
      )}
    />
  );
};
