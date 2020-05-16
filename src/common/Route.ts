export enum Route {
  Home = "Home",
  InvestorHome = "InvestorHome",
  InvestorPerformanceAccount = "InvestorPerformanceAccount",
  InvestorBrowseInvestment = "InvestorBrowseInvestment",
  InvestorSmeDetails = "InvestorSmeDetails",
  SmeHome = "SmeHome",
}

export type RootStackParamList = {
  [Route.Home]: undefined;
  [Route.InvestorHome]: undefined;
  [Route.InvestorPerformanceAccount]: undefined;
  [Route.InvestorBrowseInvestment]: undefined;
  [Route.InvestorSmeDetails]: {
    company: string;
    country: string;
    industryName: string;
    fundsRequired: number;
    perAnnum: number;
    risk: string;
    invested?: boolean;
    onPress?: () => void;
  };
  [Route.SmeHome]: undefined;
};
