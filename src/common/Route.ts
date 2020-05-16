export enum Route {
  Home = "Home",
  InvestorHome = "InvestorHome",
  InvestorPerformanceAccount = "InvestorPerformanceAccount",
  InvestorBrowseInvestment = "InvestorBrowseInvestment",
  InvestorSmeDetails = "InvestorSmeDetails",
  SmeHome = "SmeHome",
  SmeDigitalisationDetails = "SmeDigitalisationDetails",
  SmeProfile = "SmeProfile",
  SmeGrants = "SmeGrants",
  SmeLoans = "SmeLoans",
  SmeGrantLoans = "SmeGrantLoans",
  SmeRazerPeer = "SmeRazerPeer",
  SmeOutstandingLoans = "SmeOutstandingLoans",
  SmeLoanSelect = "SmeLoanSelect",
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
  [Route.SmeDigitalisationDetails]: {
    title: string;
    subtitle: string;
    description: string;
    industryName: string;
    suggestedSoftware: string;
    discountSoftware: string;
    completed: boolean;
  };
  [Route.SmeProfile]: undefined;
  [Route.SmeGrants]: undefined;
  [Route.SmeLoans]: undefined;
  [Route.SmeGrantLoans]: { applied?: boolean; approved?: boolean };
  [Route.SmeRazerPeer]: undefined;
  [Route.SmeOutstandingLoans]: undefined;
  [Route.SmeLoanSelect]: undefined;
};
