import React from "react";
import Amplify from "aws-amplify";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "@screens/HomeScreen";
import config from "./awsconfiguration.json";

const Stack = createStackNavigator();
Amplify.configure(config);

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
