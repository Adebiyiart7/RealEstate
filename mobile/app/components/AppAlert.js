import React, { useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AlertNotificationRoot } from "react-native-alert-notification";

const AppAlert = ({ onPress, theme = "dark" }) => {
  return (
    <AlertNotificationRoot theme={theme}>
      <Pressable onPress={onPress}></Pressable>
    </AlertNotificationRoot>
  );
};

export default AppAlert;

const styles = StyleSheet.create({});
