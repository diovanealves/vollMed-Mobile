import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Main from "../screens/Main";
import Consultation from "../screens/Consultation";
import Explore from "../screens/Explore";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851",
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#fff",
};

const tabs = [
  {
    name: "Início",
    component: Main,
    icon: "home",
  },
  {
    name: "Consultas",
    component: Consultation,
    icon: "calendar",
  },
  {
    name: "Explorar",
    component: Explore,
    icon: "search",
  },
  {
    name: "Perfil",
    component: Profile,
    icon: "person",
  },
];

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tabs) => {
        return (
          <Tab.Screen
            key={tabs.name}
            name={tabs.name}
            component={tabs.component}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={tabs.icon} size={size} color={color} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
