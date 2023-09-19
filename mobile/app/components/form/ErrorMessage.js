import { StyleSheet, Text, View } from "react-native";
import React from "react";
import defaultStyles from "../../config/styles";
import colors from "../../config/colors";

const ErrorMessage = ({ visible, error }) => {
  if (!visible || !error) return null;
  return <Text style={styles.error}>{error}</Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    marginTop: 3,
    color: colors.danger,
  },
});
