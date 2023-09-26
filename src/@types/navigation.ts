import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type ListScreens = {
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  Explore: undefined;
  Consultation: undefined;
  Main: undefined;
  Tabs: undefined;
  Scheduling: { spealistId: string }
}

export type NavigationProps<T extends keyof ListScreens> = {
  navigation: NativeStackNavigationProp<ListScreens, T>;
  route: RouteProp<ListScreens, T>
}