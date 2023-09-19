import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDimensions } from "@react-native-community/hooks";

// LOCAL IMPORTS
import AppText from "./AppText";
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const GoBackArrowHeader = React.memo(
  ({ title, navigation, RightIcon, RightIconExtra, isTabScreen }) => {
    const { state } = useTheme();
    const { width: screenWidth } = useDimensions().screen;

    const arrowStyles =
      state.theme === LIGHT ? styles.arrowLight : styles.arrowDark;

    const rightStyles =
      state.theme === LIGHT ? styles.rightLight : styles.rightDark;

    return (
      <View style={styles.container}>
        {!isTabScreen && (
          <TouchableOpacity style={styles.left}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              style={[styles.arrow, arrowStyles]}
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
          <TouchableOpacity style={[styles.right, rightStyles]}>
            {RightIcon}
          </TouchableOpacity>
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
  arrowLight: {
    backgroundColor: colors.light.background100,
  },
  arrowDark: {
    backgroundColor: colors.dark.background100,
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
  rightLight: {
    backgroundColor: colors.light.background100,
  },
  rightDark: {
    backgroundColor: colors.dark.background100,
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
