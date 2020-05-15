import React from "react";
import { SvgUri } from "react-native-svg";
import { View, Text } from "react-native";

export const HomeScreen: React.FunctionComponent = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SvgUri
        width="250"
        height="250"
        uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
        color="black"
      />
      <Text>Home Screen</Text>
    </View>
  );
};
