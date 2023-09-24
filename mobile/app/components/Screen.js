import { ScrollView, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

// LOCAL IMPORTS
import colors from "../config/colors";
import { DARK, LIGHT, useTheme } from "../contexts/ThemeContext";
import MenuItem from "./MenuItem";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";

const Screen = ({ children, style, scrollable = true }) => {
  const { state, setLightTheme, setDarkTheme } = useTheme();
  const containerStyles =
    state.theme === LIGHT
      ? colors.light.background100
      : colors.dark.background100;

  const [isDarkMode, setIsDarkMode] = useState(state.theme === DARK);

  if (scrollable) {
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: containerStyles }, style]}
      >
        {/* <MenuItem
          title={"Dark Mode"}
          leftIcon="eye-outline"
          RightIcon={
            isDarkMode ? (
              <Fontisto
                name="toggle-on"
                size={40}
                color={colors[state.theme].primaryColor}
                onPress={() => {
                  setIsDarkMode(!isDarkMode);
                  setLightTheme();
                }}
              />
            ) : (
              <Fontisto
                name="toggle-off"
                size={40}
                color={colors[state.theme].lightText}
                onPress={() => {
                  setIsDarkMode(!isDarkMode);
                  setDarkTheme();
                }}
              />
            )
          }
        /> */}

        {children}
      </ScrollView>
    );
  }

  return (
    <View
      style={[styles.container, { backgroundColor: containerStyles }, style]}
    >
      {/* <MenuItem
        title={"Dark Mode"}
        leftIcon="eye-outline"
        RightIcon={
          state.theme === DARK ? (
            <Fontisto
              name="toggle-on"
              size={40}
              color={colors[state.theme].primaryColor}
              onPress={() => {
                setIsDarkMode(!isDarkMode);
                setLightTheme();
              }}
            />
          ) : (
            <Fontisto
              name="toggle-off"
              size={40}
              color={colors[state.theme].lightText}
              onPress={() => {
                setIsDarkMode(!isDarkMode);
                setDarkTheme();
              }}
            />
          )
        }
      /> */}
      {children}
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
  },
});
