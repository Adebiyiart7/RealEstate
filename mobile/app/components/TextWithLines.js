import { StyleSheet, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const TextWithLines = React.memo(({ children, style, textStyle }) => {
  const { state } = useTheme();
  const isLight = state.theme === LIGHT;
  const textStyles = isLight ? styles.textLight : styles.textDark;
  const containerStyles = isLight
    ? styles.containerLight
    : styles.containerDark;

  return (
    <View style={[styles.container, containerStyles, style]}>
      <AppText style={[styles.text, textStyles, textStyle]}>{children}</AppText>
    </View>
  );
});

export default TextWithLines;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    alignItems: "center",
  },
  containerLight: {
    borderBottomColor: colors.light.border200,
  },
  containerDark: {
    borderBottomColor: colors.dark.border200,
  },
  text: {
    position: "absolute",
    top: -12,
    paddingHorizontal: 10,
  },
  textLight: {
    backgroundColor: colors.light.background100,
  },
  textDark: {
    backgroundColor: colors.dark.background100,
  },
});
