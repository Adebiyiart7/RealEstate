import { StyleSheet, Text } from "react-native";
import React from "react";

// LOCAL IMPORTS
import colors from "../../config/colors";
import { useTheme } from "../../contexts/ThemeContext";

const ErrorMessage = ({ visible, error }) => {
  const { state } = useTheme();

  if (!visible || !error) return null;
  return (
    <Text style={[styles.error, { color: colors[state.theme].danger }]}>
      {error}
    </Text>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    marginTop: 3,
  },
});
