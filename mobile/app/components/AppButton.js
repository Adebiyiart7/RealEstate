import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import AppText from "./AppText";

const AppButton = ({
  children,
  style,
  textStyle,
  startImage,
  onPress,
  disabled
}) => {

  return (
    <>
      {!disabled ? (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
          {startImage && (
            <Image source={startImage} style={styles.startImageStyle} />
          )}
          <AppText style={[styles.text, textStyle]}>{children}</AppText>
        </TouchableOpacity>
      ) : (
        <View style={[styles.disabled.button, style]}>
          {startImage && (
            <Image source={startImage} style={styles.startImageStyle} />
          )}
          <AppText style={[styles.text, textStyle]}>{children}</AppText>
        </View>
      )}
    </>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: defaultStyles.colors.primaryColor,
    padding: 12,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  startImageStyle: {
    height: 20,
    width: 20,
    marginRight: 5
  },
  text: {
    color: defaultStyles.colors.white,
    fontWeight: "500"
  },
  disabled: {
    button: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: defaultStyles.colors.disabled,
      padding: 12,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10
    }
  }
});
