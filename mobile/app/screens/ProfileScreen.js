import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import {
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons
} from "@expo/vector-icons";

// LOCAL IMPORTS
import colors from "../config/colors";
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppButton from "../components/AppButton";
import routes from "../config/routes";
import { clearAuth } from "../features/auth/authSlice";
import MenuItem from "../components/MenuItem";
import AppText from "../components/AppText";
import ItemSeparatorComponent from "../components/ItemSeparatorComponent";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { profile } = useSelector((state) => state.profile);

  const handleLogout = () => {
    dispatch(clearAuth());
    AsyncStorage.clear().then(() => navigation.navigate(routes.LETS_YOU_IN));
  };

  return (
    <Screen>
      <GoBackArrowHeader
        isTabScreen
        navigation={navigation}
        title={"Profile"}
        RightIconExtra={
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            color={colors.primaryText}
            size={24}
          />
        }
      />
      <View style={styles.user}>
        <View>
          <Image
            style={styles.avatar}
            source={require("../assets/images/avatar.jpg")}
          />
          <TouchableOpacity>
            <FontAwesome
              name="pencil-square"
              size={30}
              style={styles.editPhoto}
            />
          </TouchableOpacity>
        </View>
        <AppText style={styles.fullname} numberOfLines={1}>
          {profile.fullname}
        </AppText>
      </View>
      <View style={styles.menu}>
        <MenuItem title={"My Booking"} leftIcon="calendar-month" />
        <MenuItem title={"Payments"} leftIcon="cash" />
        <ItemSeparatorComponent style={{ marginVertical: 10 }} />
        <MenuItem title={"Profile"} leftIcon="account-outline" />
        <MenuItem title={"Notification"} leftIcon="bell-outline" />
        <MenuItem title={"Security"} leftIcon="shield-check-outline" />
        <MenuItem
          title={"Language"}
          subTitle={"English (US)"}
          leftIcon="dots-triangle"
        />
        <MenuItem
          title={"Dark Mode"}
          leftIcon="eye-outline"
          RightIcon={
            isDarkMode ? (
              <Fontisto
                name="toggle-on"
                size={30}
                color={colors.primaryColor}
                onPress={() => setIsDarkMode(!isDarkMode)}
              />
            ) : (
              <Fontisto
                name="toggle-off"
                size={30}
                color={colors.lightText}
                onPress={() => setIsDarkMode(!isDarkMode)}
              />
            )
          }
        />
        <MenuItem title={"Help Center"} leftIcon="exclamation-thick" />
        <MenuItem
          title={"Invite Friends"}
          leftIcon="account-supervisor-outline"
        />
        <MenuItem
          isLogout
          showRightIcon={false}
          title={"Logout"}
          leftIcon="logout"
          onPress={() => {
            handleLogout();
          }}
        />
      </View>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 200,
    height: 150,
    width: 150
  },
  editPhoto: {
    position: "absolute",
    color: colors.primaryColor,
    right: 0,
    bottom: 10
  },
  fullname: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10,
    maxWidth: 280,
    paddingBottom: 20
  },
  menu: {},
  user: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
    borderBottomColor: colors.border200,
    borderBottomWidth: 1
  }
});
