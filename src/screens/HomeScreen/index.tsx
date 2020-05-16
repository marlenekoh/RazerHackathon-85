import React from "react";
import { Button } from "react-native-paper";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Expander } from "@components/Expander";
import { RootStackParamList, Route } from "@common/Route";
import { Center } from "@components/Center";

import { HomeScreenContainer } from "./HomeScreenContainer";

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.Home>;
  route: RouteProp<RootStackParamList, Route.Home>;
}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <HomeScreenContainer>
      <Expander vertical size={250} />
      <Center>
        <Button
          mode="contained"
          onPress={() => navigation.navigate(Route.InvestorHome)}
        >
          Investor
        </Button>
        <Expander vertical size={50} />
        <Button mode="contained">SME</Button>
      </Center>
    </HomeScreenContainer>
  );
};
