import React from "react";
import { SvgUri } from "react-native-svg";
import { Text } from "react-native";

import { HomeScreenContainer } from "./HomeScreenContainer";

export const HomeScreen: React.FunctionComponent = () => {
  return (
    <HomeScreenContainer>
      <SvgUri
        width="250"
        height="250"
        uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
        color="black"
      />
      <Text>Home Screen</Text>
    </HomeScreenContainer>
  );
};
