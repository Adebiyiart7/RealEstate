import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// LOCAL IMPORTS
import routes from "../../config/routes";
import ProfileScreen from "../../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.PROFILE}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
