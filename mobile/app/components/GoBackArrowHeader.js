import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

// LOCAL IMPORTS
import AppText from "./AppText";
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const GoBackArrowHeader = React.memo(
  ({ title, navigation, RightIcon, RightIconExtra, isTabScreen }) => {
    const { state } = useTheme();
    const isLight = state.theme === LIGHT;
    const { width: screenWidth } = useWindowDimensions();
    const iconColor = isLight ? styles.iconLight : styles.iconDark;

    return (
      <View style={styles.container}>
        {!isTabScreen && (
          <TouchableOpacity style={styles.left}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              style={[styles.arrow, iconColor]}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        )}
        <AppText
          numberOfLines={1}
          style={[styles.title, { width: screenWidth - 138 }]}
        >
          {title}
        </AppText>
        {RightIconExtra && (
          <TouchableOpacity style={{ ...styles.right, ...styles.rightExtra }}>
            {RightIconExtra}
          </TouchableOpacity>
        )}
        {RightIcon && (
          <TouchableOpacity style={styles.right}>{RightIcon}</TouchableOpacity>
        )}
      </View>
    );
  }
);

export default GoBackArrowHeader;

const styles = StyleSheet.create({
  arrow: {
    color: colors.primaryText,
    padding: 10,
    borderRadius: 50,
  },
  iconLight: {
    color: colors.light.primaryText,
  },
  iconDark: {
    color: colors.dark.primaryText,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    minHeight: 70,
  },
  left: {},
  right: {
    position: "absolute",
    right: 0,
    color: colors.primaryText,
    padding: 10,
    borderRadius: 50,
  },
  rightExtra: {
    right: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
