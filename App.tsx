import React from "react";
import Amplify from "aws-amplify";
import { StatusBar, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";

import { HomeScreen } from "@screens/HomeScreen";
import config from "./awsconfiguration.json";

const Stack = createStackNavigator();
Amplify.configure(config);

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent("app", () => App);
export default App;
