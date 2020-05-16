import React from "react";
import Amplify from "aws-amplify";
import { StatusBar, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider as PaperProvider } from "react-native-paper";

import { HomeScreen } from "@screens/HomeScreen";
import config from "./awsconfiguration.json";

const Drawer = createDrawerNavigator();
Amplify.configure(config);

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <PaperProvider>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent("app", () => App);
export default App;
