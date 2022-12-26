import React from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// LOCAL IMPORTS
import colors from "../config/colors";
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppButton from "../components/AppButton";
import routes from "../config/routes";

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    AsyncStorage.multiRemove(["user"]).then(() =>
      navigation.navigate(routes.LETS_YOU_IN)
    );
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
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
