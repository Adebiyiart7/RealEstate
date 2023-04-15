import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// LOCAL IMPORTS
import routes from "../config/routes";
import HomeScreen from "../screens/HomeScreen";
import tabBarIcon from "./tabBarIcon";
import ExploreScreen from "../screens/ExploreScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => tabBarIcon(route, focused),
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          height: 57
        },
        tabBarLabelStyle: {
          marginBottom: 5,
          fontSize: 11
        },
        tabBarIconStyle: {
          marginTop: 8
        }
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
      <Tab.Group>
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
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabNavigator;
