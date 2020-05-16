export enum Route {
  Home = "Home",
  PerformanceAccount = "PerformanceAccount",
}

export type RootStackParamList = {
  [Route.Home]: undefined;
  [Route.PerformanceAccount]: undefined;
};
