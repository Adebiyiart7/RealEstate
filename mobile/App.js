import AuthNavigator from "./app/components/navigations/AuthNavigator";
import CreateNewPasswordScreen from "./app/screens/CreateNewPasswordScreen";
import CreateNewPinScreen from "./app/screens/CreateNewPinScreen";
import ForgotPasswordScreen from "./app/screens/ForgotPasswordScreen";
import LetsYouIn from "./app/screens/LetsYouInScreen";
import LoginScreen from "./app/screens/LoginScreen";
import OTPCodeVerificationScreen from "./app/screens/OTPCodeVerificationScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
