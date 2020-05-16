export enum Route {
  Home = "Home",
  InvestorHome = "InvestorHome",
  InvestorPerformanceAccount = "InvestorPerformanceAccount",
  InvestorBrowseInvestment = "InvestorBrowseInvestment",
  SmeHome = "SmeHome",
}

export type RootStackParamList = {
  [Route.Home]: undefined;
  [Route.InvestorHome]: undefined;
  [Route.InvestorPerformanceAccount]: undefined;
  [Route.InvestorBrowseInvestment]: undefined;
  [Route.SmeHome]: undefined;
};
