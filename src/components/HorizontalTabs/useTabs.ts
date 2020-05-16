import React, { useState } from "React";
import { SceneMap } from "react-native-tab-view";
import { Dimensions } from "react-native";

export const useTabs = (
  tab1: { title: string; component: React.FunctionComponent },
  tab2: { title: string; component: React.FunctionComponent }
) => {
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

  return {
    routes,
    renderScene,
    index,
    setIndex,
    initialLayout,
  };
};
