import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

// LOCAL IMPORTS
import store from "./app/store/store";
import AppNavigator from "./app/navigations/AppNavigator";
import BaseData from "./app/components/BaseData";
import { FavoritesProvider } from "./app/contexts/FavoriteHomeContext";
import { ThemeProvider } from "./app/contexts/ThemeContext";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider>
          <BaseData />
          <FavoritesProvider>
            <AppNavigator />
          </FavoritesProvider>
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

// TODO organize DB
// TODO REAL Real Estate Images
// TODO back button should close modal
// TODO APK

/**

 PUBLISH APK: eas build -p android --profile preview
 *




 {
  "name": "real-estate",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@expo/vector-icons": "13.0.0",
    "@react-native-async-storage/async-storage": "1.17.11",
    "@react-native-community/hooks": "2.6.0",
    "@react-navigation/bottom-tabs": "6.5.3",
    "@react-navigation/drawer": "6.5.7",
    "@react-navigation/elements": "1.3.13",
    "@react-navigation/material-bottom-tabs": "6.2.11",
    "@react-navigation/material-top-tabs": "6.5.2",
    "@react-navigation/native": "6.1.2",
    "@react-navigation/native-stack": "6.9.8",
    "@react-navigation/stack": "^6.3.11",
    "@reduxjs/toolkit": "1.9.1",
    "axios": "1.2.1",
    "expo": "47.0.13",
    "expo-constants": "14.0.2",
    "expo-status-bar": "1.4.2",
    "formik": "2.2.9",
    "lottie-react-native": "5.1.4",
    "moment": "2.29.4",
    "react": "18.1.0",
    "react-native": "^0.70.8",
    "react-native-alert-notification": "0.3.4",
    "react-native-gesture-handler": "2.8.0",
    "react-native-linear-gradient": "2.6.2",
    "react-native-reanimated": "2.12.0",
    "react-native-reanimated-carousel": "3.1.5",
    "react-native-safe-area-context": "4.4.1",
    "react-native-screens": "3.18.0",
    "react-redux": "8.0.5",
    "yup": "0.32.11"
  },
  "devDependencies": {
    "@babel/core": "7.12.9"
  },
  "private": true
}

 */
