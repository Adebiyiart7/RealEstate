
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

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={routes}>
      <Stack.Screen
        name={routes.LETS_YOU_IN}
        component={LetsYouIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.REGISTER}
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.LOGIN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.PROFILE}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
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
    </Stack.Navigator>
  );
};

export default AuthNavigator;
