import React from "react";
import { Button } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { RootStackParamList, Route } from "@common/Route";

import { HomeScreenContainer } from "./HomeScreenContainer";

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
      <Expander vertical size={250} />
      <Text h1>SME</Text>
    </HomeScreenContainer>
  );
};
