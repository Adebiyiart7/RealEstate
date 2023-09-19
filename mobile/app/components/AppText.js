import React from "react";
import { StyleSheet, Text } from "react-native";

// LOCAL IMPORTS
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const AppText = React.memo(({ style, children, numberOfLines, onPress }) => {
  const { state } = useTheme();
  const textStyles = state.theme === LIGHT ? styles.textLight : styles.textDark;

  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={[textStyles, style]}
    >
      {children}
    </Text>
  );
});

export default AppText;

const styles = StyleSheet.create({
  textLight: {
    color: colors.light.primaryText,
  },
  textDark: {
    color: colors.dark.primaryText,
  },
});
