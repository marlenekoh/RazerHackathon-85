import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Route } from "@common/Route";
import { ScreenHeader } from "@components/ScreenHeader";
import { InvestedTab } from "./InvestedTab";
import { OngoingTab } from "./OngoingTab";
import { HorizontalTabs } from "@components/HorizontalTabs";
import { ScreenContainer } from "@components/ScreenContainer";

interface BrowseInvestmentScreenProps {
  navigation: StackNavigationProp<
    RootStackParamList,
    Route.InvestorBrowseInvestment
  >;
  route: RouteProp<RootStackParamList, Route.InvestorBrowseInvestment>;
}

export const BrowseInvestmentScreen: React.FunctionComponent<BrowseInvestmentScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <ScreenContainer>
      <ScreenHeader title="Browse Investment" onBack={() => navigation.pop()} />
      <HorizontalTabs
        tab1={{
          title: "performance",
          component: () => (
            <OngoingTab
              navigateToCard={(cardProps) =>
                navigation.navigate(Route.InvestorSmeDetails, cardProps)
              }
            />
          ),
        }}
        tab2={{
          title: "account",
          component: () => (
            <InvestedTab
              navigateToCard={(cardProps) =>
                navigation.navigate(Route.InvestorSmeDetails, cardProps)
              }
            />
          ),
        }}
      />
    </ScreenContainer>
  );
};
