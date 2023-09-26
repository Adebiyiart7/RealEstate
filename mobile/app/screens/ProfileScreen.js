import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import {
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
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
import BottomSheet from "../components/BottomSheet";
import { DARK, LIGHT, useTheme } from "../contexts/ThemeContext";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { state, setLightTheme, setDarkTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(state.theme === DARK);
  const { profile } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);
  const [showLogoutBottomSheet, setShowLogoutBottomSheet] = useState(false);

  const handleLogout = () => {
    dispatch(clearAuth());
    AsyncStorage.clear().then(() => navigation.navigate(routes.LETS_YOU_IN));
  };

  const LogoutConfirmation = () => {
    return (
      <View style={styles.logoutBottomSheet}>
        <AppText
          style={[styles.logoutHeader, { color: colors[state.theme].danger }]}
        >
          Logout
        </AppText>
        <ItemSeparatorComponent style={{ marginVertical: 20 }} />
        <AppText style={styles.logoutMessage}>
          Are you sure you want to log out?
        </AppText>
        <View style={styles.logoutButtons}>
          <AppButton
            secondary
            rounded
            style={{ flex: 1, marginRight: 8 }}
            onPress={() => setShowLogoutBottomSheet(false)}
          >
            Cancel
          </AppButton>
          <AppButton
            rounded
            style={{ flex: 1, marginLeft: 8 }}
            onPress={() => {
              handleLogout();
            }}
          >
            Yes, Logout
          </AppButton>
        </View>
      </View>
    );
  };

  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader
        isTabScreen
        navigation={navigation}
        title={"Profile"}
        RightIcon={
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            color={colors[state.theme].primaryText}
            size={24}
          />
        }
      />
      <BottomSheet
        bottomSheetVisible={showLogoutBottomSheet}
        setBottomSheetVisible={setShowLogoutBottomSheet}
        bottomSheetContent={<LogoutConfirmation />}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.user,
            { borderBottomColor: colors[state.theme].border200 },
          ]}
        >
          <View>
            <Image
              style={styles.avatar}
              source={require("../assets/images/avatar.jpg")}
            />
            <TouchableOpacity>
              <FontAwesome
                name="pencil-square"
                size={30}
                style={[
                  styles.editPhoto,
                  { color: colors[state.theme].primaryColor },
                ]}
              />
            </TouchableOpacity>
          </View>
          <AppText style={styles.fullname} numberOfLines={1}>
            {profile?.fullname ? profile.fullname : user.username}
          </AppText>
        </View>
        <View style={styles.menu}>
          <MenuItem
            title={"My Booking"}
            leftIcon="calendar-month"
            onPress={() => navigation.navigate(routes.MY_BOOKING)}
          />
          <MenuItem
            title={"Payments"}
            leftIcon="cash"
            onPress={() => navigation.navigate(routes.PAYMENTS)}
          />
          <ItemSeparatorComponent style={{ marginVertical: 10 }} />
          <MenuItem
            title={"Profile"}
            leftIcon="account-outline"
            onPress={() => navigation.navigate(routes.FILL_PROFILE)}
          />
          <MenuItem
            title={"Notification"}
            leftIcon="bell-outline"
            onPress={() => navigation.navigate(routes.NOTIFICATION_SETTINGS)}
          />
          <MenuItem
            title={"Security"}
            leftIcon="shield-check-outline"
            onPress={() => navigation.navigate(routes.SECURITY)}
          />
          <MenuItem
            title={"Language"}
            subTitle={"English (US)."}
            leftIcon="dots-triangle"
            onPress={() => navigation.navigate(routes.LANGUAGE)}
          />
          <MenuItem
            onLongPress={() => {
              setIsDarkMode(!isDarkMode);
              isDarkMode ? setLightTheme() : setDarkTheme();
            }}
            title={"Dark Mode"}
            leftIcon="eye-outline"
            subTitle={"Long-press to toggle mode."}
            RightIcon={
              isDarkMode ? (
                <Fontisto
                  name="toggle-on"
                  size={40}
                  color={colors[state.theme].primaryColor}
                  onLongPress={() => {
                    setIsDarkMode(!isDarkMode);
                    setLightTheme();
                  }}
                />
              ) : (
                <Fontisto
                  name="toggle-off"
                  size={40}
                  color={colors[state.theme].lightText}
                  onLongPress={() => {
                    setIsDarkMode(!isDarkMode);
                    setDarkTheme();
                  }}
                />
              )
            }
          />
          <MenuItem
            title={"Help Center"}
            leftIcon="exclamation-thick"
            onPress={() => navigation.navigate(routes.HELP_CENTER)}
          />
          <MenuItem
            title={"Invite Friends"}
            leftIcon="account-supervisor-outline"
            onPress={() => navigation.navigate(routes.INVITE_FRIENDS)}
          />
          <MenuItem
            isLogout
            showRightIcon={false}
            title={"Logout"}
            leftIcon="logout"
            onPress={() => setShowLogoutBottomSheet(true)}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 200,
    height: 150,
    width: 150,
  },
  editPhoto: {
    position: "absolute",
    right: 0,
    bottom: 10,
  },
  fullname: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10,
    maxWidth: 280,
    paddingBottom: 20,
  },
  logoutButtons: {
    display: "flex",
    flexDirection: "row",
  },
  logoutBottomSheet: {
    padding: 16,
    paddingTop: 5,
  },
  logoutHeader: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  logoutMessage: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 16,
  },
  user: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
  },
});
