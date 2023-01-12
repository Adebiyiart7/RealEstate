import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

// LOCAL IMPORTS
import routes from "../config/routes";
import LetsYouIn from "../screens/LetsYouInScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import FillProfileScreen from "../screens/FillProfileScreen";
import CreateNewPinScreen from "../screens/CreateNewPinScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import TabNavigator from "./TabNavigator";
import NotificationsScreen from "../screens/NotificationScreens";
import OurRecommendationScreen from "../screens/OurRecommendationScreen";
import SearchScreen from "../screens/SearchScreen";
import EstateDetails from "../screens/EstateDetails";
import BookingScreen from "../screens/booking/BookingScreen";
import BookingFormScreen from "../screens/booking/BookingFormScreen";
import BookingPaymentScreen from "../screens/booking/BookingPaymentScreen";
import AddNewCardScreen from "../screens/booking/AddNewCardScreen";
import ReviewSummary from "../screens/booking/ReviewSummary";
import ConfirmPinScreen from "../screens/ConfirmPinScreen";
import EReceiptScreen from "../screens/booking/EReceiptScreen";
import OTPCodeVerificationScreen from "../screens/OTPCodeVerificationScreen";
import CreateNewPassword from "../screens/CreateNewPasswordScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Stack.Navigator
      initialRouteName={routes.TAB}
      screenOptions={{ headerShown: false }}
    >
      {/* PUBLIC SCREEN */}
      <Stack.Screen name={routes.LETS_YOU_IN} component={LetsYouIn} />
      <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routes.NEW_PIN} component={CreateNewPinScreen} />
      <Stack.Screen name={routes.NEW_PASSWORD} component={CreateNewPassword} />
      <Stack.Screen
        name={routes.OTP_CODE_VERIFICATION}
        component={OTPCodeVerificationScreen}
      />
      <Stack.Screen
        name={routes.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={routes.OUR_RECOMMENDATION}
        component={OurRecommendationScreen}
      />
      <Stack.Screen name={routes.SEARCH} component={SearchScreen} />
      <Stack.Screen name={routes.ESTATE_DETAILS} component={EstateDetails} />

      {/* PRIVATE SCREENS */}
      {user && (
        <Stack.Group>
          <Stack.Screen
            name={routes.FILL_PROFILE}
            component={FillProfileScreen}
          />
          <Stack.Screen
            name={routes.NOTIFICATIONS}
            component={NotificationsScreen}
          />
          <Stack.Screen name={routes.BOOKING} component={BookingScreen} />
          <Stack.Screen
            name={routes.BOOKING_FORM}
            component={BookingFormScreen}
          />
          <Stack.Screen
            name={routes.BOOKING_PAYMENT}
            component={BookingPaymentScreen}
          />
          <Stack.Screen
            name={routes.ADD_NEW_CARD}
            component={AddNewCardScreen}
          />
          <Stack.Screen
            name={routes.REVIEW_SUMMARY}
            component={ReviewSummary}
          />
          <Stack.Screen
            name={routes.CONFIRM_PIN}
            component={ConfirmPinScreen}
          />
          <Stack.Screen name={routes.E_RECEIPT} component={EReceiptScreen} />
        </Stack.Group>
      )}
      {/**
       * TAB NAVIGATOR
       * some screens in the tab stack are private
       */}
      <Stack.Screen name={routes.TAB} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
