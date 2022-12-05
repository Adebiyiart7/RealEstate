import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import AppText from "./AppText";

const AppButton = ({ children, style, textStyle, startImage, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {startImage && (
        <Image source={startImage} style={styles.startImageStyle} />
      )}
      <AppText style={[styles.text, textStyle]}>{children}</AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    // width: "100%",
    backgroundColor: defaultStyles.colors.primaryColor,
    padding: 12,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  startImageStyle: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  text: {
    color: defaultStyles.colors.white,
    fontWeight: "500",
  }
});
