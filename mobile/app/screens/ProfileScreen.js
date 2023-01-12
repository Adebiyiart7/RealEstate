import React from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

// LOCAL IMPORTS
import colors from "../config/colors";
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppButton from "../components/AppButton";
import routes from "../config/routes";
import { clearAuth } from "../features/auth/authSlice";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearAuth());
    AsyncStorage.clear().then(() => navigation.navigate(routes.LETS_YOU_IN));
  };

  return (
    <Screen>
      <GoBackArrowHeader navigation={navigation} title={"Profile"} />
      <AppButton
        onPress={() => {
          handleLogout();
        }}
        style={{ backgroundColor: colors.danger }}
      >
        Logout
      </AppButton>
      <AppButton onPress={() => navigation.navigate(routes.FILL_PROFILE)}>
        Update Profile
      </AppButton>
      <AppButton onPress={() => navigation.navigate(routes.NEW_PASSWORD)}>
        Change Password
      </AppButton>
      <AppButton onPress={() => navigation.navigate(routes.NOTIFICATIONS)}>
        Notification
      </AppButton>
      <AppButton onPress={() => navigation.navigate(routes.SEARCH)}>
        Search
      </AppButton>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
