import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Route } from "@common/Route";
import { PerformanceAccountScreenContainer } from "./PerformanceAccountScreenContainer";
import { PerformanceTab } from "./PerformanceTab";
import { AccountTab } from "./AccountTab";
import { ScreenHeader } from "@components/ScreenHeader";
import { HorizontalTabs } from "@components/HorizontalTabs";

interface PerformanceAccountScreenProps {
  navigation: StackNavigationProp<
    RootStackParamList,
    Route.InvestorPerformanceAccount
  >;
  route: RouteProp<RootStackParamList, Route.InvestorPerformanceAccount>;
}

export const PerformanceAccountScreen: React.FunctionComponent<PerformanceAccountScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <PerformanceAccountScreenContainer>
      <ScreenHeader
        onBack={() => navigation.pop()}
        title="Performance & Accounts"
      />
      <HorizontalTabs
        tab1={{
          title: "performance",
          component: () => <PerformanceTab />,
        }}
        tab2={{
          title: "account",
          component: () => <AccountTab />,
        }}
      />
    </PerformanceAccountScreenContainer>
  );
};
