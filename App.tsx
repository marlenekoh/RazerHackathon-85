import React from "react";
import Amplify from "aws-amplify";
import { StatusBar, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";

import {
  PerformanceAccountScreen as InvestorPerformanceAccountScreen,
  HomeScreen as InvestorHomeScreen,
  BrowseInvestmentScreen as InvestorBrowseInvestmentScreen,
  SmeDetailsScreen as InvestorSmeDetailsScreen,
} from "@screens/Investor";
import {
  HomeScreen as SmeHomeScreen,
  DigitalisationDetailsScreen as SmeDigitalisationDetailsScreen,
  ProfileScreen as SmeProfileScreen,
} from "@screens/Sme";
import { HomeScreen } from "@screens/HomeScreen";
import { Route } from "@common/Route";

import config from "./awsconfiguration.json";
import {} from "@screens/Investor/BrowseInvestmentScreen";

const Stack = createStackNavigator();
Amplify.configure(config);

const App: React.FunctionComponent = () => {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <StatusBar />
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name={Route.Home}
            component={HomeScreen}
            options={screenOptions}
          />
          <Stack.Screen
            name={Route.InvestorHome}
            component={InvestorHomeScreen}
            options={screenOptions}
          />
          <Stack.Screen
            name={Route.InvestorPerformanceAccount}
            component={InvestorPerformanceAccountScreen}
            options={screenOptions}
          />

          <Stack.Screen
            name={Route.InvestorBrowseInvestment}
            component={InvestorBrowseInvestmentScreen}
            options={screenOptions}
          />
          <Stack.Screen
            name={Route.InvestorSmeDetails}
            component={InvestorSmeDetailsScreen}
            options={screenOptions}
          />
          <Stack.Screen
            name={Route.SmeHome}
            component={SmeHomeScreen}
            options={screenOptions}
          />
          <Stack.Screen
            name={Route.SmeDigitalisationDetails}
            component={SmeDigitalisationDetailsScreen}
            options={screenOptions}
          />
          <Stack.Screen
            name={Route.SmeProfile}
            component={SmeProfileScreen}
            options={screenOptions}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent("app", () => App);
export default App;
