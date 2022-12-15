import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// LOCAL IMPORTS
import routes from "../config/routes";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import tabBarIcon from "./tabBarIcon";
import ExploreScreen from "../screens/ExploreScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => tabBarIcon(route, focused),
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          marginBottom: 3,
          fontSize: 11
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      })}
    >
      <Tab.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={routes.EXPLORE}
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={routes.FAVORITES}
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={routes.MESSAGES}
        component={MessagesScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
