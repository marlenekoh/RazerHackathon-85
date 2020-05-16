import React from "react";
import { View } from "react-native";
import { Avatar, ProgressBar, Colors } from "react-native-paper";
import { Text } from "@components/Text";

import { HomeScreenContainer } from "./HomeScreenContainer";

export const HomeScreen: React.FunctionComponent = () => {
  return (
    <HomeScreenContainer>
      <Avatar.Image
        source={{
          uri:
            "https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png",
        }}
      />
      <Text p1>Hi Really Long Name from</Text>
      <Text h2>Really Long Company Name</Text>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <ProgressBar progress={0.6} color={Colors.blue100} />
      </View>
    </HomeScreenContainer>
  );
};
