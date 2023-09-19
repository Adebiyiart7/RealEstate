import { StyleSheet } from "react-native";
import React from "react";

// LOCAL IMPORTS
import AppText from "./AppText";
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const SeeAllText = React.memo(() => {
  const { state } = useTheme();
  const textColor =
    state.theme === LIGHT
      ? colors.light.primaryColor
      : colors.dark.primaryColor;

  return (
    <AppText style={[styles.seeAll, { color: textColor }]}>See All</AppText>
  );
});

export default SeeAllText;

const styles = StyleSheet.create({
  seeAll: {
    fontWeight: "bold",
    marginTop: 2,
  },
});
