module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json"]
        }
      ],
      "react-native-reanimated/plugin"
    ]
  };
};


/**
 * {
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
    "@expo/vector-icons": "^13.0.0",
    "@expo/webpack-config": "^0.17.0",
    "@react-native-async-storage/async-storage": "^1.17.11",
    "@react-native-community/hooks": "^2.6.0",
    "@react-native-community/masked-view": "0.1.10",
    "@react-navigation/bottom-tabs": "^6.3.2",
    "@react-navigation/drawer": "^6.4.3",
    "@react-navigation/elements": "1.3.3",
    "@react-navigation/material-bottom-tabs": "6.2.1",
    "@react-navigation/material-top-tabs": "6.2.1",
    "@react-navigation/native": "^6.0.11",
    "@react-navigation/native-stack": "^6.6.1",
    "@react-navigation/stack": "^6.2.2",
    "@reduxjs/toolkit": "^1.9.1",
    "axios": "^1.2.1",
    "expo": "~47.0.8",
    "expo-constants": "^14.0.2",
    "expo-status-bar": "~1.4.2",
    "formik": "^2.2.9",
    "lottie-react-native": "^5.1.4",
    "moment": "^2.29.4",
    "react": "18.1.0",
    "react-dom": "^18.0.0",
    "react-native": "0.70.5",
    "react-native-alert-notification": "^0.3.4",
    "react-native-daterange-picker": "^1.5.1",
    "react-native-gesture-handler": "^2.5.0",
    "react-native-linear-gradient": "^2.6.2",
    "react-native-mmkv": "^2.5.1",
    "react-native-reanimated": "^2.9.1",
    "react-native-reanimated-carousel": "^3.1.5",
    "react-native-safe-area-context": "^4.3.1",
    "react-native-screens": "^3.15.0",
    "react-native-web": "^0.18.10",
    "react-redux": "^8.0.5",
    "yup": "^0.32.11"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9"
  },
  "private": true
}

 */