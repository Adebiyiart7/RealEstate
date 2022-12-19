import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// LOCAL IMPORTS
import routes from "../config/routes";
import LetsYouIn from "../screens/LetsYouInScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CreateNewPinScreen from "../screens/CreateNewPinScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import TabNavigator from "./TabNavigator";
import NotificationsScreen from "../screens/NotificationScreens";
import OurRecommendationScreen from "../screens/OurRecommendationScreen";
import SearchScreen from "../screens/SearchScreen";
import EstateDetails from "../screens/EstateDetails";
import BookingScreen from "../screens/BookingScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.TAB}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={routes.LETS_YOU_IN} component={LetsYouIn} />
      <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routes.NEW_PIN} component={CreateNewPinScreen} />
      <Stack.Screen
        name={routes.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={routes.NOTIFICATIONS}
        component={NotificationsScreen}
      />
      <Stack.Screen
        name={routes.OUR_RECOMMENDATION}
        component={OurRecommendationScreen}
      />
      <Stack.Screen name={routes.SEARCH} component={SearchScreen} />
      <Stack.Screen name={routes.ESTATE_DETAILS} component={EstateDetails} />
      <Stack.Screen name={routes.BOOKING} component={BookingScreen} />

      {/* TAB NAVIGATOR */}
      <Stack.Screen name={routes.TAB} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
