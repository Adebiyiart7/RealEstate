import { StyleSheet, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const ItemSeparatorComponent = React.memo(({ style }) => {
  const { state } = useTheme();
  const viewStyles = state.theme === LIGHT ? styles.viewLight : styles.viewDark;

  return <View style={[styles.view, viewStyles, style]} />;
});

export default ItemSeparatorComponent;

const styles = StyleSheet.create({
  view: {
    borderBottomWidth: 1,
  },
  viewLight: {
    borderBottomColor: colors.light.border100,
  },
  viewDark: {
    borderBottomColor: colors.dark.border100,
  },
});
