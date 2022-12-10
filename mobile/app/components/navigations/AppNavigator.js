
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// LOCAL IMPORTS
import routes from "../../config/routes";
import LetsYouIn from "../../screens/LetsYouInScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import LoginScreen from "../../screens/LoginScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import CreateNewPinScreen from "../../screens/CreateNewPinScreen";
import ForgotPasswordScreen from "../../screens/ForgotPasswordScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={routes.LETS_YOU_IN}
        component={LetsYouIn}
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name={routes.REGISTER}
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.LOGIN}
        component={LoginScreen}
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name={routes.PROFILE}
        component={ProfileScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name={routes.NEW_PIN}
        component={CreateNewPinScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.APP}
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
